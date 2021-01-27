import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { TweetComponent } from '../components/tweet/tweet.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [Tab1Page,TweetComponent],
  exports:[TweetComponent]
})
export class Tab1PageModule {}
