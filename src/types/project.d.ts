type Project = {
    name: string;
    roles: string[];
    link: string;
  }

type ImageProps = {
    url: string;
  } 

type TestimonyProps ={
    name:string;
    imageLink : string;
    role:string;
    className?: string;
}


type formSubmission=  { 
  name:string,
  email:string,
  subject:string,
  message:string
}