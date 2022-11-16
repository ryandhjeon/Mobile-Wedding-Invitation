import config from './config'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseApp = initializeApp(config)
const db = getDatabase(firebaseApp)

export const rsvpRef = ref(db, "rsvp")