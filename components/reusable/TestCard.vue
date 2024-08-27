<template>
    <div>
      <h1>Contacts</h1>
      <ul>
        <li
          v-for="contact in contacts"
          :key="contact.id"
        >
          <img
            :src="contact.profile"
            v-shared-element:[contact.id]
          />
          <span>{{ contact.name }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [
          {
            id: '1',
            name: 'John Doe',
            profile: 'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?t=st=1722894306~exp=1722897906~hmac=1bc7be956bb4ff8c476399fd39fab188ab2597ae6684fb359c1e64d6bc9ecb8c&w=2000'
          },
          {
            id: '2',
            name: 'John Doe',
            profile: 'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?t=st=1722894306~exp=1722897906~hmac=1bc7be956bb4ff8c476399fd39fab188ab2597ae6684fb359c1e64d6bc9ecb8c&w=2000'
          },
          {
            id: '3',
            name: 'John Doe',
            profile: 'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?t=st=1722894306~exp=1722897906~hmac=1bc7be956bb4ff8c476399fd39fab188ab2597ae6684fb359c1e64d6bc9ecb8c&w=2000'
          },
        ]
      }
    }
  }
  </script>