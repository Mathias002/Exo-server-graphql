import { getClosestColor } from "./colors.js";

const doctorsData = [
    {
      name: 'Samia Mekame',
      speciality: 'OPHTALMOLOGIST' as const,
    },
    {
      name: 'Catherine Bedoy',
      speciality: 'PSYCHOLOGIST' as const,
    },
  ];

type Speciality = 'OPHTALMOLOGIST' | 'PSYCHOLOGIST'

export const resolvers = {
  Query: {
    
    doctors: (_: unknown, {specialities}: {specialities?: Speciality[]}) => specialities ? doctorsData.filter(doctor => specialities.includes(doctor.speciality)) : doctorsData,
    
    // doctors: (parent, args, context, info) => {
    //   console.log(args.specialities);
    //   //condition empty
    //   if(!args.specialities){
    //     throw new Error('Veuillez renseigner une spécialitées en paramètre')
    //   } 

    //   const filteredDoctors = doctorsData.filter(doc => args.specialities.includes(doc.speciality))
    //   return filteredDoctors
    // },

    add: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 + number2,
    substract: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 - number2,
    multiply: (_: unknown, {number1, number2}: {number1: number, number2: number}) => number1 * number2,
    divide: (_: unknown, {number1, number2}: {number1: number, number2: number}) => {
      if(number2 === 0){
        throw new Error('Impossible de diviser par 0')
      }
      return number1 / number2
    },

    closestColor: (_: unknown, {hexa}: {hexa: string}) => {
      if(!(hexa.match(/^#[0-9a-fA-F]{6}/))){
        throw new Error('Renseigner un hexa valide')
      }
      return getClosestColor(hexa, ["#FF5733", "#33FF57", "#3357FF"])
    }

  },
}