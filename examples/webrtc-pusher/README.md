# Example video chat app with native WebRTC APIs using Pusher as Signaling server

- The normal use case for building a video chat app tends to require websockets but [Vercel does not support websocket](https://vercel.com/support/articles/do-vercel-serverless-functions-support-websocket-connections)
- To buy pass this:
  1. You can host the app on a single server (No Lambdas)
  2. YOu can use a service like Pusher as our signaling server

In this repo "webrtc-pusher", you will use Pusher as your signaling server

## Demo
### [https://next-webrtc-pusher.vercel.app](https://next-webrtc-pusher.vercel.app)

## Run locally
1. Create a [Pusher](https://pusher.com/) account
2. Create an a [Channels](https://pusher.com/channels) app in the Pusher dashboard
3. In the app overview screen, select **App Keys** 
4. Create a **.env** in root (follow *env.template* for env mapping)
5. `yarn install`
6. `yarn dev`

## Deploy to Vercel
