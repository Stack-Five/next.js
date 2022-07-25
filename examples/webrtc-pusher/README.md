# Example video chat app with native WebRTC APIs using Pusher as Signaling server

- The normal use case for building a video chat app tends to require websockets for signalling but [Vercel does not support websocket](https://vercel.com/support/articles/do-vercel-serverless-functions-support-websocket-connections)
- To buy pass this:
  1. You can host an app on a single server (No serverless) or
  2. You can use a service like Pusher as our signaling server

In this repo "webrtc-pusher", you will use Pusher as your signaling server

## Demo

[Demo](https://next-js-webrtc-pusher-example.vercel.app/)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example webrtc-pusher webrtc-pusher-app
# or
yarn create next-app --example webrtc-pusher webrtc-pusher-app
# or
pnpm create next-app --example webrtc-pusher webrtc-pusher-app
```

1. Create a [Pusher](https://pusher.com/) account
2. Create an a [Channels](https://pusher.com/channels) App in the Pusher dashboard
3. In the app overview screen, select **App Keys**
4. Create a **.env** in root (follow _env.template_ for env mapping)
5. You also want to go to **App Settings** and turn on **Enable Client Events**

Note: If you don't want to do client routing, there is an `index.example.ts` file to trigger event via the server, but you will have to bind these event appropriately on the client side

6. `[yarn | npm | pnpm] install`
7. `[yarn | npm | pnpm] dev`
