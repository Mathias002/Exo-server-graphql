import {gql} from 'graphql-tag'

export const typeDefs = gql`

  type Query {
    doctors(specialities: [Speciality!]): [Doctor]

    add(number1: Float!, number2: Float!) : Float!

    substract(number1: Float!, number2: Float!) : Float!

    multiply(number1: Float!, number2: Float!) : Float!

    divide(number1: Float!, number2: Float!) : Float

    closestColor(hexa: String!): String

    getFilms: [Film]

    getPeoples: [People]

    getFilmById(filmId: String!): String!

    getPeopleById(peopleId: String!): String!

  }

  type Film {
    id: String!
    title: String!
    people: [People]!
  }

  type People{
    id: String!
    name: String!
    eyeColor: String!
    films: [Film]!
  }

  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;