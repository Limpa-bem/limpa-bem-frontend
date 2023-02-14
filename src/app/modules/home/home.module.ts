import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import {ButtonModule} from 'primeng/button';

@NgModule({
	declarations: [
            HomeComponent,
        ],
	imports: [CommonModule, HomeRoutingModule, ButtonModule],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class HomeModule {}
