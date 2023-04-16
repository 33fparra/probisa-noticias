import { FormContact } from "../interfaces/form-contact.interface";


export abstract class FormContactRepository {
  abstract add(param: FormContact): Promise<FormContact>;
}
