import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sudhendra Kambhamettu",
  initials: "SK",
  location: "Boston, Massachussets, USA",
  locationLink: "https://www.google.com/maps/place/Boston",
  about:
    "An AI Product Developer focused on building relevant AI systems.",
  summary:
    "As an AI Product Developer and DL Engineer, I have a proven track record of pioneering in the field of artificial intelligence, especially in computational biology and deep learning. My expertise lies in leading and collaborating with diverse teams, fostering an environment that encourages innovation and peak performance. Currently, my work primarily involves PyTorch, Huggingface and cloud tools like AWS, GCP, and Azure. With over 4 years of experience, including international collaborations, I have demonstrated exceptional skills in developing and implementing cutting-edge AI solutions across various domains.",
  avatarUrl: "https://avatars.githubusercontent.com/sudhendra",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "sudhendrakambhamettu@gmail.com",
    tel: "+18573132050",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Sudhendra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sudhendrak/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sudhendrakambh3",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Northeastern University",
      degree: "MS in Artificial Intelligence.",
      start: "2022",
      end: "2024",
    },
    {
      school: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science with a specialization in Data Science.",
      start: "2018",
      end: "2022",
    },
  ],
  publication:[
    {
      title: "Cerebro",
      date: "Feb. 2023",
      citation: "Kambhamettu, S., Vimal Cruz, M., Anitha, S., Sibi Chakkaravarthy, S. and Nandeesh Kumar, K., 2023. Brain–Computer Interface‑Assisted Automated Wheelchair Control Management–Cerebro: A BCI Application. Brain‑Computer Interface: Using Deep Learning Applications, pp.205‑229.",
    },
  ],
  work: [
    {
      company: "Camp4 Therapeutics",
      link: "https://www.camp4tx.com/",
      badges: ["Hybrid"],
      title: "Computational Biology Co-op",
      logo: ParabolLogo,
      start: "Jul. 2023",
      end: "Dec. 2023",
      description:
        "Led a deep learning team in enhancing RNA nucleotide reactivity prediction using Large Language Models (LLMs), achieving a notable 0.17 Average MAE for RNA reactivity Prediction. Developed a scalable AWS framework for genomics data, improving the AUPR benchmark by 50% and introducing visualization techniques to increase LLM explainability in RNA analysis. Pioneered proprietary tokenization algorithms for embedding coherence.",
    },
    {
      company: "Northeastern University",
      link: "",
      badges: ["Hybrid"],
      title: "Research Assistant",
      logo: ClevertechLogo,
      start: "Feb. 2023",
      end: "Jul. 2023",
      description:
        "Developed a Universal Multimodal Encoder with late fusion, hierarchical fusion and early fusion methods combining DINO pre-trained ViT model and BERT for image and text modalities respectively. Evaluated on Hateful Memes Dataset (0.85 ROC-AUC) & private twitter mental health dataset (95% accuracy).",
    },
    {
      company: "RAPYD AI Gmbh",
      link: "https://www.rapyd.ai/",
      badges: ["Remote"],
      title: "AI Product Developer",
      logo: JojoMobileLogo,
      start: "Dec. 2020",
      end: "Dec. 2021",
      description:
        "Played a key role in a startup's foundational team, leading the development of unique Computer Vision and NLP applications. Architected the rapyd.ai API, integrating AWS, GCP, and Azure, to provide a streamlined, no-code AI solution.",
    },
  ],
  skills: [
    "Python/Java/C++",
    "SQL/BigQuery",
    "Bash",
    "Pytorch/Tensorflow/Keras/Huggingface",
    "Numpy/Pandas/Scikit-learn",
    "Spacy/Nltk/Open-cv",
    "Matplotlib/Seaborn/Tableau",
    "AWS/GCP",
    "Docker/git"
  ],
  projects: [
    {
      title: "LITART",
      techStack: [
        "Research Project",
        "Python",
        "Pytorch",
        "NLP",
        "Generative AI",
        "Huggingface",
      ],
      description: "Automatic & Scene consistent Generation of Textually Accurate Fictional Characters from Novels.",
      link: {
        label: "drive.google.com",
        href: "https://drive.google.com/file/d/1rLLRnnt7mSvVZOtojhunan6jMM30kBEQ/view?usp=sharing",
      },
    },
    {
      title: "Scrap Tire Forecasting & Supply Chain Optimization",
      techStack: ["Hackathon Winner", "Python", "Timeseries", "NLP"],
      description:
        "Achieved award‑winning (2nd Place) performance for forecasting scrap tires and optimizing supplychain for reduced carbon emissions towards the Reinvented the wheel 2.0 hackathon.",
      link: {
        label: "linkedin.com",
        href: "https://www.linkedin.com/posts/sudhendrak_artficialintelligence-machinelearning-hackathon-activity-6997787097537355776-N6Ij?utm_source=share&utm_medium=member_desktop",
      },
    },
    {
      title: "GODS (Guiding Object Detection using Segmentation) Pre‑training",
      techStack: ["Side Project", "Pytorch", "Self-supervised learning", "End-to-end framework"],
      description:
        "An innovative pretraining strategy for OWL-ViT v2, integrating segmentation and attention objectives to significantly enhance its generalization across unseen categories, achieving a notable increase in mAP to 46.6 for novel object detection on the LVIS dataset.",
      // logo: JarockiMeLogo,
      // link: {
      //   label: "github.com",
      //   href: "https://jarocki.me/",
      // },
    },
    {
      title: "HumanizeXAI",
      techStack: ["Course Project", "Python", "Interpretable AI", "streamlit.io"],
      description:
        "An intuitive web-tool for analyzing & evaluating AI models for vulnerabilities and producing interpretable statistics.",
      // logo: Minimal,
      // link: {
      //   label: "useminimal.com",
      //   href: "https://useminimal.com/",
      // },
    },
    {
      title: "Harmful Algal Bloom Detection",
      techStack: ["Side Project", "Google Earth Engine", "Microsoft Planetary Computer", "Jupyter Notebook", "BigQuery"],
      description:
        "Detects harmful algal blooms in lakes from satellite Images. This project was in collaboration with NASA.",
      // logo: BarepapersLogo,
      // link: {
      //   label: "barepapers.com",
      //   href: "https://barepapers.com/",
      // },
    },
    {
      title: "Monocular Image Depth Estimation using Vision Transformers",
      techStack: ["Course Project", "Python", "Computer vision"],
      description: "Improved depth estimation with ViT-tiny 16, achieving a low root mean squared error of 0.138 and high processing speeds up to 22 fps, outperforming current techniques and enabling efficient real-time 3D reconstruction on complex datasets like NYU-depthV2 and CITYSCAPES.",
      // logo: YearProgressLogo,
      // link: {
      //   label: "getyearprogress.com",
      //   href: "https://getyearprogress.com/",
      // },
    },
  ],
} as const;
