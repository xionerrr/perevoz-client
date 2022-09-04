import { BookModal } from './BookModal'
import { CreateTrip } from './CreateTripModal'
import { EditCountry } from './EditCountryModal'
import { EditTrip } from './EditTripModal'
import { FeedbackModal } from './FeedbackModal'
import { OpenPhoto } from './OpenPhoto'

import { E_Modals } from 'types/UI'

export const ModalComponents = {
  [E_Modals.feedback]: FeedbackModal,
  [E_Modals.book]: BookModal,
  [E_Modals.editTrip]: EditTrip,
  [E_Modals.createTrip]: CreateTrip,
  [E_Modals.editCountry]: EditCountry,
  [E_Modals.openPhoto]: OpenPhoto,
}
