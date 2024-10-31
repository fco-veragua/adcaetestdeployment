import { NgModule } from '@angular/core';

// tip: para agrupar importaciones...

// -- modules -- //
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// -- components -- //
import { AppComponent } from './app.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    SeparatorComponent
  ],

  // RECORDAR:
  // - "modules" -> "import"
  // - "components" -> "export" | "declarations"
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
