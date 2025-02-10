resource "aws_subnet" "public" {
  count = length(local.public_subnets)

  vpc_id            = module.vpc.vpc_id
  cidr_block        = local.public_subnets[count.index]
  availability_zone = element(module.vpc.azs, count.index)

  tags = {
    Name = "public-subnet-${count.index}"
  }
}

resource "aws_subnet" "private" {
  count = length(local.private_subnets)

  vpc_id            = module.vpc.vpc_id
  cidr_block        = local.private_subnets[count.index]
  availability_zone = element(module.vpc.azs, count.index)

  tags = {
    Name = "private-subnet-${count.index}"
  }
}