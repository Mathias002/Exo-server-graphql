import {MutationResolvers} from "../../types.js"
import { comparePasswords, hashPassword } from "../../modules/auth.js";
import {createJWT} from "../../modules/auth.js"

export const signIn: MutationResolvers['signIn'] = async  (_, {username, password}, {dataSources: {db}}) => {
    try {
        const user = await db.user.findFirstOrThrow({
        where: {
            username: username,
        },
        })

        var isPasswordValid = await comparePasswords(password, user.password)

        
        if(!isPasswordValid){
            throw new Error('Invalid password')
        }
            
        const userToken = createJWT(user)
      
        return {
          code: 201,
          success: true,
          message: `user ${username} has been logged `,
          token: userToken,
        }
      } catch {
        return {
          code: 400,
          message: 'User has not been logged',
          success: false,
          token: ""
        }
      }
}