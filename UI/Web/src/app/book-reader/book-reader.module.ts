import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReaderComponent } from './book-reader/book-reader.component';
import { BookReaderRoutingModule } from './book-reader.router.module';
import { SharedModule } from '../shared/shared.module';
import { SafeStylePipe } from './safe-style.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbNavModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { ReaderSettingsComponent } from './reader-settings/reader-settings.component';


@NgModule({
  declarations: [BookReaderComponent, SafeStylePipe, TableOfContentsComponent, ReaderSettingsComponent],
  imports: [
    CommonModule,
    BookReaderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbAccordionModule, // Drawer
    NgbNavModule, // Drawer
  ], exports: [
    BookReaderComponent,
    SafeStylePipe
  ]
})
export class BookReaderModule { }
