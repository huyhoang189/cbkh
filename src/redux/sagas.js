import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import invoicesSagas from './invoice/saga';
import scientificJournalSagas from './scientificJournal/saga'
import authorSagas from './author/saga'
import attachmentSagas from './attachment/saga'
import citeSagas from './cite/saga'
import classificationSagas from './classification/saga'
import documentTypeSagas from './documentType/saga'
import languageSagas from './language/saga'
import researchGroupSagas from './researchGroup/saga'
import sourceSagas from './postedSource/saga'
import majorSagas from './major/saga'
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    invoicesSagas(),
    scientificJournalSagas(),
    authorSagas(),
    attachmentSagas(),
    citeSagas(),
    classificationSagas(),
    documentTypeSagas(),
    languageSagas(),
    researchGroupSagas(),
    majorSagas(),
    sourceSagas(),

  ]);
}
