import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  hello: Scalars['String'];
  users: Array<Maybe<User>>;
  whoPort?: Maybe<Portfolio>;
};


export type QueryWhoPortArgs = {
  id: Scalars['String'];
};

/** User model */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
};


/** Portfolio model */
export type Portfolio = {
  __typename?: 'Portfolio';
  id: Scalars['ID'];
  avatar: Scalars['String'];
  resume: Scalars['String'];
  background: Scalars['String'];
  name: Name;
  social: Social;
  works: Array<Works>;
  contact: Contact;
  about: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type Name = {
  __typename?: 'Name';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickName: Scalars['String'];
};

export type Social = {
  __typename?: 'Social';
  gitHup: Scalars['String'];
  faceBook: Scalars['String'];
  linkedIn: Scalars['String'];
  twitter: Scalars['String'];
};

export type Works = {
  __typename?: 'Works';
  id: Scalars['ID'];
  name: Scalars['String'];
  previewImage: Scalars['String'];
  description: Scalars['String'];
  viewDemo: Scalars['String'];
  viewGitHup: Scalars['String'];
  skillsUsed: Array<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String'];
  tel: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logOut: Scalars['String'];
  editLanding?: Maybe<Portfolio>;
  editAbout?: Maybe<Portfolio>;
  editResume: Portfolio;
  editWork: Portfolio;
  deleteWork: Portfolio;
};


export type MutationEditLandingArgs = {
  data: LandingInput;
};


export type MutationEditAboutArgs = {
  about: Scalars['String'];
};


export type MutationEditResumeArgs = {
  resume: Scalars['String'];
};


export type MutationEditWorkArgs = {
  work: WorkInput;
};


export type MutationDeleteWorkArgs = {
  workId: Scalars['String'];
};

export type LandingInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickName: Scalars['String'];
  avatar: Scalars['String'];
  background: Scalars['String'];
  linkedIn: Scalars['String'];
  gitHup: Scalars['String'];
  faceBook: Scalars['String'];
  twitter: Scalars['String'];
  email: Scalars['String'];
  tel: Scalars['String'];
};

export type WorkInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  previewImage: Scalars['String'];
  description: Scalars['String'];
  viewDemo: Scalars['String'];
  viewGitHup: Scalars['String'];
  skillsUsed: Array<Scalars['String']>;
};

export type DeleteWorkMutationVariables = Exact<{
  workId: Scalars['String'];
}>;


export type DeleteWorkMutation = (
  { __typename?: 'Mutation' }
  & { deleteWork: (
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  ) }
);

export type EditAboutMutationVariables = Exact<{
  about: Scalars['String'];
}>;


export type EditAboutMutation = (
  { __typename?: 'Mutation' }
  & { editAbout?: Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  )> }
);

export type EditLandingMutationVariables = Exact<{
  data: LandingInput;
}>;


export type EditLandingMutation = (
  { __typename?: 'Mutation' }
  & { editLanding?: Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  )> }
);

export type EditResumeMutationVariables = Exact<{
  resume: Scalars['String'];
}>;


export type EditResumeMutation = (
  { __typename?: 'Mutation' }
  & { editResume: (
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  ) }
);

export type EditWorkMutationVariables = Exact<{
  work: WorkInput;
}>;


export type EditWorkMutation = (
  { __typename?: 'Mutation' }
  & { editWork: (
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  ) }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logOut'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'createdAt'>
  ) }
);

export type WhoPortQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type WhoPortQuery = (
  { __typename?: 'Query' }
  & { whoPort?: Maybe<(
    { __typename?: 'Portfolio' }
    & Pick<Portfolio, 'id' | 'avatar' | 'background' | 'about' | 'resume' | 'createdAt'>
    & { name: (
      { __typename?: 'Name' }
      & Pick<Name, 'firstName' | 'lastName' | 'nickName'>
    ), social: (
      { __typename?: 'Social' }
      & Pick<Social, 'gitHup' | 'faceBook' | 'linkedIn' | 'twitter'>
    ), contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'email' | 'tel'>
    ), works: Array<(
      { __typename?: 'Works' }
      & Pick<Works, 'id' | 'name' | 'description' | 'previewImage' | 'viewDemo' | 'viewGitHup' | 'skillsUsed'>
    )> }
  )> }
);


export const DeleteWorkDocument = gql`
    mutation deleteWork($workId: String!) {
  deleteWork(workId: $workId) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;
export type DeleteWorkMutationFn = ApolloReactCommon.MutationFunction<DeleteWorkMutation, DeleteWorkMutationVariables>;

/**
 * __useDeleteWorkMutation__
 *
 * To run a mutation, you first call `useDeleteWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkMutation, { data, loading, error }] = useDeleteWorkMutation({
 *   variables: {
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useDeleteWorkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteWorkMutation, DeleteWorkMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteWorkMutation, DeleteWorkMutationVariables>(DeleteWorkDocument, baseOptions);
      }
export type DeleteWorkMutationHookResult = ReturnType<typeof useDeleteWorkMutation>;
export type DeleteWorkMutationResult = ApolloReactCommon.MutationResult<DeleteWorkMutation>;
export type DeleteWorkMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteWorkMutation, DeleteWorkMutationVariables>;
export const EditAboutDocument = gql`
    mutation editAbout($about: String!) {
  editAbout(about: $about) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;
export type EditAboutMutationFn = ApolloReactCommon.MutationFunction<EditAboutMutation, EditAboutMutationVariables>;

/**
 * __useEditAboutMutation__
 *
 * To run a mutation, you first call `useEditAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAboutMutation, { data, loading, error }] = useEditAboutMutation({
 *   variables: {
 *      about: // value for 'about'
 *   },
 * });
 */
export function useEditAboutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditAboutMutation, EditAboutMutationVariables>) {
        return ApolloReactHooks.useMutation<EditAboutMutation, EditAboutMutationVariables>(EditAboutDocument, baseOptions);
      }
export type EditAboutMutationHookResult = ReturnType<typeof useEditAboutMutation>;
export type EditAboutMutationResult = ApolloReactCommon.MutationResult<EditAboutMutation>;
export type EditAboutMutationOptions = ApolloReactCommon.BaseMutationOptions<EditAboutMutation, EditAboutMutationVariables>;
export const EditLandingDocument = gql`
    mutation editLanding($data: LandingInput!) {
  editLanding(data: $data) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;
export type EditLandingMutationFn = ApolloReactCommon.MutationFunction<EditLandingMutation, EditLandingMutationVariables>;

/**
 * __useEditLandingMutation__
 *
 * To run a mutation, you first call `useEditLandingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditLandingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editLandingMutation, { data, loading, error }] = useEditLandingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditLandingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditLandingMutation, EditLandingMutationVariables>) {
        return ApolloReactHooks.useMutation<EditLandingMutation, EditLandingMutationVariables>(EditLandingDocument, baseOptions);
      }
export type EditLandingMutationHookResult = ReturnType<typeof useEditLandingMutation>;
export type EditLandingMutationResult = ApolloReactCommon.MutationResult<EditLandingMutation>;
export type EditLandingMutationOptions = ApolloReactCommon.BaseMutationOptions<EditLandingMutation, EditLandingMutationVariables>;
export const EditResumeDocument = gql`
    mutation editResume($resume: String!) {
  editResume(resume: $resume) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;
export type EditResumeMutationFn = ApolloReactCommon.MutationFunction<EditResumeMutation, EditResumeMutationVariables>;

/**
 * __useEditResumeMutation__
 *
 * To run a mutation, you first call `useEditResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editResumeMutation, { data, loading, error }] = useEditResumeMutation({
 *   variables: {
 *      resume: // value for 'resume'
 *   },
 * });
 */
export function useEditResumeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditResumeMutation, EditResumeMutationVariables>) {
        return ApolloReactHooks.useMutation<EditResumeMutation, EditResumeMutationVariables>(EditResumeDocument, baseOptions);
      }
export type EditResumeMutationHookResult = ReturnType<typeof useEditResumeMutation>;
export type EditResumeMutationResult = ApolloReactCommon.MutationResult<EditResumeMutation>;
export type EditResumeMutationOptions = ApolloReactCommon.BaseMutationOptions<EditResumeMutation, EditResumeMutationVariables>;
export const EditWorkDocument = gql`
    mutation editWork($work: WorkInput!) {
  editWork(work: $work) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;
export type EditWorkMutationFn = ApolloReactCommon.MutationFunction<EditWorkMutation, EditWorkMutationVariables>;

/**
 * __useEditWorkMutation__
 *
 * To run a mutation, you first call `useEditWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editWorkMutation, { data, loading, error }] = useEditWorkMutation({
 *   variables: {
 *      work: // value for 'work'
 *   },
 * });
 */
export function useEditWorkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditWorkMutation, EditWorkMutationVariables>) {
        return ApolloReactHooks.useMutation<EditWorkMutation, EditWorkMutationVariables>(EditWorkDocument, baseOptions);
      }
export type EditWorkMutationHookResult = ReturnType<typeof useEditWorkMutation>;
export type EditWorkMutationResult = ApolloReactCommon.MutationResult<EditWorkMutation>;
export type EditWorkMutationOptions = ApolloReactCommon.BaseMutationOptions<EditWorkMutation, EditWorkMutationVariables>;
export const HelloDocument = gql`
    query hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;
export const LogOutDocument = gql`
    mutation logOut {
  logOut
}
    `;
export type LogOutMutationFn = ApolloReactCommon.MutationFunction<LogOutMutation, LogOutMutationVariables>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogOutMutation, LogOutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument, baseOptions);
      }
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = ApolloReactCommon.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogOutMutation, LogOutMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    username
    createdAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const WhoPortDocument = gql`
    query whoPort($id: String!) {
  whoPort(id: $id) {
    id
    avatar
    background
    name {
      firstName
      lastName
      nickName
    }
    social {
      gitHup
      faceBook
      linkedIn
      twitter
    }
    contact {
      email
      tel
    }
    works {
      id
      name
      description
      previewImage
      viewDemo
      viewGitHup
      skillsUsed
    }
    about
    resume
    createdAt
  }
}
    `;

/**
 * __useWhoPortQuery__
 *
 * To run a query within a React component, call `useWhoPortQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoPortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoPortQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWhoPortQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WhoPortQuery, WhoPortQueryVariables>) {
        return ApolloReactHooks.useQuery<WhoPortQuery, WhoPortQueryVariables>(WhoPortDocument, baseOptions);
      }
export function useWhoPortLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WhoPortQuery, WhoPortQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WhoPortQuery, WhoPortQueryVariables>(WhoPortDocument, baseOptions);
        }
export type WhoPortQueryHookResult = ReturnType<typeof useWhoPortQuery>;
export type WhoPortLazyQueryHookResult = ReturnType<typeof useWhoPortLazyQuery>;
export type WhoPortQueryResult = ApolloReactCommon.QueryResult<WhoPortQuery, WhoPortQueryVariables>;