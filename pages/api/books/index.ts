import { NextApiRequest, NextApiResponse } from 'next';
import booksArray from '../../../utils/booksData';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        debugger;
        if (!Array.isArray(booksArray)) {
            throw new Error('Cannot find user data')
        }

        res.status(200).json(booksArray);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler;
