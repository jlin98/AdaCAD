import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MixerComponent} from './mixer.component';
import { MixerViewComponent } from './mixerview/mixerview.component';
import { SubdraftComponent } from './palette/subdraft/subdraft.component';
import { PaletteComponent } from './palette/palette.component';
import { SnackbarComponent } from './palette/snackbar/snackbar.component';
import { MarqueeComponent } from './palette/marquee/marquee.component';
import { OperationComponent } from './palette/operation/operation.component';
import { ConnectionComponent } from './palette/connection/connection.component';
import { OpsComponent } from './modal/ops/ops.component';
import { OpHelpModal } from './modal/ophelp/ophelp.modal';
import { ImageComponent } from './palette/image/image.component';
import { DraftDetailModule } from '../draftdetail/draftdetail.module';
import { NoteComponent } from './palette/note/note.component';
import { ParameterComponent } from './palette/operation/parameter/parameter.component';
import { InletComponent } from './palette/operation/inlet/inlet.component';
import { DesignComponent } from './design/design.component';
import { QuickopComponent } from './quickop/quickop.component';



@NgModule({
    imports: [
        CoreModule,
        DraftDetailModule
    ],
    declarations: [
        MixerComponent,
        MixerViewComponent,
        SubdraftComponent,
        PaletteComponent,
        SnackbarComponent,
        MarqueeComponent,
        OperationComponent,
        ConnectionComponent,
        OpsComponent,
        OpHelpModal,
        ImageComponent,
        NoteComponent,
        ParameterComponent,
        InletComponent,
        DesignComponent,
        QuickopComponent
        ]
})
export class MixerModule { }
