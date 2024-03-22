import { Request, Response, NextFunction } from "express"
import axios, { AxiosResponse } from "axios"

const testFunction = async (req: Request, res: Response, next: NextFunction) => {
    const clientUrl: any = process.env.CLIENT_URL
    let result: AxiosResponse = await axios.get(clientUrl)
    return res.status(200).send(result.data)
}

export default { testFunction }