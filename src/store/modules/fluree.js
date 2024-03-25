// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';
// import { Story } from '@/api/story.js'
// import { HordeClient } from '@/api/horde_client.js'

import { FlureeClient } from '@fluree/fluree-client';
// import { v4 as uuidv4 } from 'uuid'
// import {HordeClient} from '@scenaristeur/horde-vue'
// import system_prompts from '@/prompts/system_prompts'

// console.log("system_prompts", system_prompts)

const state = () => ({
// fluree_url: 'http://localhost:58090/fluree/',
// client : new FlureeClient({
//   // isFlureeHosted: true,
//   // apiKey: process.env.FLUREE_API_KEY,
//   host: 'localhost',
//   port: 58090,
//   ledger: 'cryptids',
// }).connect()
})

const mutations = {

  // createThing(state, options) {
  //   state.target = options
  //   state.target.system_prompt =
  //     state.system_prompts[state.target.sexe][state.target.type][state.lang]
  //   console.log(state.target)
  //   state.sexe = options.sexe
  //   state.type = options.type
  //   state.system_prompt = state.system_prompts[state.sexe][state.type][state.lang]
  // },

}

const actions = {
  async createThing(context, thing) {
    thing.create = Date.now()

    const client = await new FlureeClient({
      host: 'localhost',
      port: 58090,
      ledger: 'cryptids',
    }).connect();
    // const createdClient = await client.create('new-ledger');
    //  console.log(createdClient)
 console.log(client)
const transactionInstance = client.transact({
  insert: { '@id': 'freddy', name: 'Freddy' },
});

const response = await transactionInstance.send();
    // const transactionInstance = await client.transact({
    //   insert: thing,
    // });
    
    // const response = await transactionInstance.send();
    console.log(response);
  }
  //   async publishStory(context, storyName) {
  //     let { story, images } = context.state.story.getClean(storyName)
  //     console.log('Published Story', story)
  //     console.log(images)
  //     context.dispatch('firestore/publishStory', story, { root: true })
  //     context.dispatch(
  //       'firestore/publishImages',
  //       { images: images, story_id: story.id },
  //       { root: true }
  //     )
  //   },
  //   async newUserMessage(context, userMessage) {
  //     context.state.story.onNewUserMessage(userMessage)
  //     await context.dispatch('getCompletion', context.state.story)
  //   },
  //   async getCompletion(context, story) {
  //     story.hordeApiKey = context.state.hordeApi
  //     console.log(context.state, story)
  //     let completion = await context.state.hordeClient.getCompletion(story)
  //     console.log('completion', completion)
  //   }
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}