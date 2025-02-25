import { GraphQLResolveInfo } from 'graphql';
import { FilmModel, PeopleModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Doctor = {
  __typename?: 'Doctor';
  name?: Maybe<Scalars['String']['output']>;
  speciality?: Maybe<Speciality>;
};

export type Film = {
  __typename?: 'Film';
  id: Scalars['String']['output'];
  people: Array<Maybe<People>>;
  title: Scalars['String']['output'];
};

export type People = {
  __typename?: 'People';
  eyeColor: Scalars['String']['output'];
  films: Array<Maybe<Film>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  add: Scalars['Float']['output'];
  closestColor?: Maybe<Scalars['String']['output']>;
  divide?: Maybe<Scalars['Float']['output']>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  getFilmById: Scalars['String']['output'];
  getFilms?: Maybe<Array<Maybe<Film>>>;
  getPeopleById: Scalars['String']['output'];
  getPeoples?: Maybe<Array<Maybe<People>>>;
  multiply: Scalars['Float']['output'];
  substract: Scalars['Float']['output'];
};


export type QueryAddArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryClosestColorArgs = {
  hexa: Scalars['String']['input'];
};


export type QueryDivideArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryDoctorsArgs = {
  specialities?: InputMaybe<Array<Speciality>>;
};


export type QueryGetFilmByIdArgs = {
  filmId: Scalars['String']['input'];
};


export type QueryGetPeopleByIdArgs = {
  peopleId: Scalars['String']['input'];
};


export type QueryMultiplyArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QuerySubstractArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};

export enum Speciality {
  Ophtalmologist = 'OPHTALMOLOGIST',
  Psychologist = 'PSYCHOLOGIST'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Doctor: ResolverTypeWrapper<Doctor>;
  Film: ResolverTypeWrapper<FilmModel>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  People: ResolverTypeWrapper<PeopleModel>;
  Query: ResolverTypeWrapper<{}>;
  Speciality: Speciality;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Doctor: Doctor;
  Film: FilmModel;
  Float: Scalars['Float']['output'];
  People: PeopleModel;
  Query: {};
  String: Scalars['String']['output'];
};

export type DoctorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Doctor'] = ResolversParentTypes['Doctor']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciality?: Resolver<Maybe<ResolversTypes['Speciality']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  add?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryAddArgs, 'number1' | 'number2'>>;
  closestColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryClosestColorArgs, 'hexa'>>;
  divide?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Doctor']>>>, ParentType, ContextType, Partial<QueryDoctorsArgs>>;
  getFilmById?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetFilmByIdArgs, 'filmId'>>;
  getFilms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Film']>>>, ParentType, ContextType>;
  getPeopleById?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetPeopleByIdArgs, 'peopleId'>>;
  getPeoples?: Resolver<Maybe<Array<Maybe<ResolversTypes['People']>>>, ParentType, ContextType>;
  multiply?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryMultiplyArgs, 'number1' | 'number2'>>;
  substract?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QuerySubstractArgs, 'number1' | 'number2'>>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Doctor?: DoctorResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

