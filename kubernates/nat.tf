resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public[0].id

  tags = {
    Name = "my-nat-gateway"
  }
}

resource "aws_eip" "nat" {
  vpc = true
}