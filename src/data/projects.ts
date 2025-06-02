import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "lift-and-shift-migration-to-cloud",
    title: "Lift and Shift Migration to Cloud",
    description:
      "Migration all data to AWS cloud. this migrate use method backup and restore and aws database migration server for CDC, ",
    icon: "/skills/aws.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["Data", "Cloud", "Migrate"],
  },
  {
    id: "sql-refactoring",
    title: "SQL refactoring",
    description:
      "refactoring SQL to Babelfish Compass, so it can be changed into 2 engines SQL and PostgreSQL",
    icon: "/skills/sql-database-generic-svgrepo-com.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["SQL", "PosqtgreSQL", "AWS", "Database"],
  },
  {
    id: "detection-pest-use-IoT-and-deep-learning",
    title: "Detection Pest Use IoT and Deep Learning",
    description:
      "Application AI integrate to hardware ( camera, pir censor, and buzzer). Create AI use python and communicate use MQTT  ",
    icon: "/skills/python-svgrepo-com.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/FaisalT0435/Detection-Pest-Use-Deep-Learning.git",
    url: "https://ieeexplore.ieee.org/document/10276784",
    tags: ["Python", "AI", "IoT", "MQTT"],
  },
  {
    id: "app-psak",
    title: "PSAK 71 App",
    description:
      "An bangking web application InHouse developed using Java, Material UI, Redux, and Stripe.",
    icon: "/skills/java-svgrepo-com.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["Java", "Redux", "Material UI", "Stripe"],
  },
  {
    id: "generative-ai",
    title: "Generative AI use Cloud ",
    description:
      "Deploy chatbot ai use amazon Q with data internal . ",
    icon: "/skills/aws.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Cloud", "AI", "AWS"],
  },
  {
    id: "migration-cloud-rs",
    title: "Migration System Hospital",
    description:
      "a application use system DevOps. Migrate to AWS Cloud use app2Container and EKS services. ",
    icon: "/skills/kubernates.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["DevOps", "Kubernates", "AWS", "Hospital"],
  },
  {
    id: "travel-app-flutter",
    title: "Wider Tour  App",
    description:
      "A Wider Tour mobile application developed using Flutter, BloC, Hive DB, and PDF.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/FaisalT0435/Wider-tour_mobile-app.git",
    url: "https://github.com/FaisalT0435/Wider-tour_mobile-app.git",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    id: "migrate-alibaba-to-aws",
    title: "Migrate Alibaba cloud to AWS cloud",
    description:
      "Migrate alibaba to aws use aws application migrattion service.",
    icon: "/skills/aws.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Cloud", "Alibaba", "AWS", "Migrate"],
  },
  {
    id: "upgrade-storage-and-patching",
    title: "Update Storage and Patching Server Automation",
    description:
      "A update storage in linux use remote ssh and automation pathing linux use AWS patch manager",
    icon: "/skills/ubuntu.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Ubuntu", "Infrastructure", "Automation"],
  },
  {
    id: "Marquiz",
    title: "Marquiz Appliucation",
    description:
      "a marquiz is application quiz online with role teacher, studen, admin and use dart flutter.",
    icon: "/skills/dart.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "git@github.com:FaisalT0435/Project-OOP-MARQUIZ.git",
    tags: ["Dart", "flutter", "OOP"],
  },
  {
    id: "data-engineer",
    title: "AWS Data Engineer",
    description:
      "Data engineer use AWS RDS, Glue, S3 Bucket, Athena, and Quicksight",
    icon: "/skills/aws.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "https://medium.com/@faisaltsurya/olist-e-commerce-analysis-use-aws-glue-amazon-athena-amazon-qicksight-94824dd72a11",
    tags: ["Data", "Cloud", "Visualisation"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "",
    url: "",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "aws-sap-abap-sdk",
    title: "AWS SAP ABAP SDK",
    description:
      "framework to SAP Abab integrate to AWS cloud all service. this is simple to make analysis data from SAP ",
    icon: "/skills/sap-svgrepo-com.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["SAP", "AWS", "Data"],
  },
  {
    id: "disaster-recovery-on-cloud",
    title: "Disaster Recovery on Cloud",
    description:
      "Disaster recovery on cloud use AWS Elastic Disaster Recovery ",
    icon: "/skills/aws.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Cloud", "Disaster Recovery"],
  },
  {
    id: "Room Log Monitoring",
    title: "Room Log Monitoring",
    description:
      "App web for room log monitoing with record mask and analysis user log ",
    icon: "/skills/ftsa_house_48x48.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Cloud", "NextJs"],
  },
  {
    id: "IF Tools",
    title: "Informatika Tools",
    description:
      "App web for Informatika tools to help programmer or IT ",
    icon: "/skills/android-chrome-192x192.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "",
    tags: ["Cloud", "NextJs", "Informatika"],
  },
];
export default projects;
