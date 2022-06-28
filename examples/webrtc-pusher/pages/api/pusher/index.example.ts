import { NextApiRequest, NextApiResponse } from 'next';
import { pusher } from '../../../lib/pusher'

const EVENTS = {
  ICE: 'ice-candidate',
  OFFER: 'offer',
  ANSWER: 'answer',
  LEAVE: 'leave'
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type,roomName, data, userName } = JSON.parse(req.body)
    switch (type) {
      case EVENTS.ICE:
        await pusher.trigger(`presence-${roomName}`, 'ice_candidate_received', {
          type, roomName, data, userName
        })
        break;
      case EVENTS.OFFER:
        await pusher.trigger(`presence-${roomName}`, 'offer_received', {
          type, roomName, data, userName
        })
        break;
      case EVENTS.ANSWER:
        await pusher.trigger(`presence-${roomName}`, 'answer_received', {
          type, roomName, data, userName
        })
        break;
      default:
        return res.send(400)
    }
    res.json({ message: 'completed'})
  } catch (error) {
    res.send(400)
  }
}
