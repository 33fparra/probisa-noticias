import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { collectionData, query, CollectionReference, collection, Firestore, doc, setDoc, getDoc, orderBy, addDoc } from '@angular/fire/firestore';
import { COLLECTIONS } from '../../consts/collections.const';
import { genericConverter } from '../../functions/generic.converter';
import { COMMON_FIELDS } from '../../consts/common-fields.const';
import { FormContactRepository } from '../../repositories/form-contact.repository';
import { FormContact } from '../../interfaces/form-contact.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFormContactRepository extends FormContactRepository {

  private readonly fbName: string = COLLECTIONS.contactForm;
  private collection: CollectionReference<FormContact>;
  items!: Observable<FormContact[]>;

  storage: any;

  constructor(
    private localAfs: Firestore
  ) {
    super();
    this.collection = collection(this.localAfs, this.fbName).withConverter(genericConverter<FormContact>())
  }

  async add(param: FormContact): Promise<FormContact> {
    const docRef = await addDoc(this.collection, param);
    if (!docRef) {
      throw new Error('NOT_CREATED');
    }
    return { ...param, id: docRef.id };
  }
}
