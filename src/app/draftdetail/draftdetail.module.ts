import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { CoreModule } from '../core/core.module';
import { DraftDetailComponent } from './draftdetail.component';
import { CrosssectionComponent } from './crosssection/crosssection.component';
import { DraftviewerComponent } from './draftviewer/draftviewer.component';
import { ActionsComponent } from './actions/actions.component';
import { WeaverViewComponent } from './weaverview/weaverview.component';
import { RenderService } from './provider/render.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SelectionComponent } from './draftviewer/selection/selection.component';
import { SimulationComponent } from './simulation/simulation.component';

@NgModule({
    declarations: [
        DraftDetailComponent,
        CrosssectionComponent,
        DraftviewerComponent,
        ActionsComponent,
        WeaverViewComponent,
        SidebarComponent,
        SelectionComponent,
        SimulationComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        ColorPickerModule,
        MatChipsModule,
        ScrollingModule
        
    ],
    exports:[
        DraftDetailComponent
    ],
    providers: [
        RenderService
    ]
})
export class DraftDetailModule { }
