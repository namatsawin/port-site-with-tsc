import { Portfolio } from "../../generated/graphql";
export type PortTypes = {
  type: string;
  payload: currentPort;
};

export type currentPort = Portfolio | null;

// export interface Portfolio {
//   id: string;
//   user: string;
//   avatar: string;
//   resume: string;
//   background: string;
//   name: Name;
//   social: Social;
//   works: Works[];
//   contact: Contact;
//   about: string;
//   createdAt: Date;
// }

// export interface Name {
//   firstName: string;
//   lastName: string;
//   nickName: string;
// }

// export interface Social {
//   gitHup: string;
//   faceBook: string;
//   linkedIn: string;
//   twitter: string;
// }

// export interface Contact {
//   email: string;
//   tel: string;
// }

// export interface Works {
//   id: string;
//   name: string;
//   previewImage: string;
//   description: string;
//   viewDemo: string;
//   viewGitHup: string;
//   skillsUsed: string[];
// }
