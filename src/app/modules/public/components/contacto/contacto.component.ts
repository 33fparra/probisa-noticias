import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Loader } from '@googlemaps/js-api-loader';
import { mapStyles } from 'src/app/code/consts/map-styles.const';
import { environment } from '../../../../../environments/environment.prod';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subject, takeUntil } from 'rxjs';
import { FormContactRepository } from 'src/app/code/modules/data/repositories/form-contact.repository';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  loading = false;
  contactForm!: FormGroup;
  private map!: google.maps.Map;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service,
    private repository: FormContactRepository,
    private toastr: ToastrService
    // private formfire: FormfireService //agregamos el servicio de Firebase
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      asunto: [null, Validators.required],
      message: [null, Validators.required],
    });

    let loader = new Loader({
      apiKey: environment.firebaseConfig.apiKey,
    });

    loader.load().then(() => {
      const location = { lat: 40.712776, lng: -74.005974 }
      const mapElement = document.getElementById("map");
      if (mapElement) {
        this.map = new google.maps.Map(mapElement, {
          center: location,
          zoom: 6,
          styles: mapStyles
        })

        const marker = new google.maps.Marker({
          position: location,
          map: this.map,
        });
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  sendForm() {
    this.loading = true;
    this.recaptchaV3Service.execute('send-contact')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: async (token) => {
          const clte = this.contactForm.value;
          console.log("clte", clte.name);
          try {
            await this.repository.add({
              asunto: `PROBISA: ${clte.asunto}`,
              email: clte.email,
              fecha: new Date(),
              message: clte.message,
              name: clte.name
            });
            this.toastr.success('Solicitud de Contacto Enviada');
            this.contactForm.reset();
            this.loading = false;
          } catch (e) {
            console.error(e);
            this.toastr.error('Por favor reintente más tarde');
            this.loading = false;
          }
        },
        error: () => {
          this.toastr.error('No puede enviar-Por favor reintente más tarde');
          this.loading = false;
        }
      });
  }

}
