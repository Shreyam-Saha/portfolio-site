import microsoftLogo from '../assets/microsoft.svg'
import microsoftAssociateLogo from '../assets/microsoft-associate.svg'
import terraformLogo from  '../assets/terraform.svg'


const certificationCardData = [
    { 
      title: "Microsoft Certified: Azure AI Fundamentals", 
      description: 'Description 1', 
      img: microsoftLogo, 
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/ShreyamSaha-0143/D0190BE4BC5BFEEC?sharingId=FF307EB9DC47D30C',
      status: 'Completed' // Status of the card
    },
    { 
      title: "Microsoft Certified: Azure Fundamentals", 
      description: 'Description 1', 
      img: microsoftLogo, 
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/ShreyamSaha-0143/6B2A8AE1C9083366?sharingId=FF307EB9DC47D30C',
      status: 'Completed' // Status of the card
    },
    { 
      title: "HashiCorp Certified:Terraform Associate", 
      description: 'Description 1', 
      img: terraformLogo, 
      link: null,
      status: 'In Progress' // Status of the card
    },
    { 
      title: "Microsoft Certified: Azure Developer Associate", 
      description: 'Description 1', 
      img: microsoftAssociateLogo, 
      link: null,
      status: 'In Progress' // Status of the card
    },
  ];


    export default certificationCardData; 