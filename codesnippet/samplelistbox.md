#Fluid container usin a sample list box and a calendar control. 

<div class="ui-fluid ui-corner-all">
  <div class="ui-g">
    <div class="ui-g ui-g-12 ui-md-6 ui-g-nopad">
      <div class="ui-g-12 ui-md-3 ui-label">
        Passenger
      </div>
      <div class="ui-g-12 ui-md-9">
        <input pInputText type="text"/>
      </div>
    </div>
    <div class="ui-g ui-g-12 ui-md-6 ui-g-nopad">
      <div class="ui-g-12 ui-md-3 ui-label">
        Flight day
      </div>
      <div class="ui-g-12 ui-md-9">
        <p-calendar [(ngModel)]="date" [showIcon]="true">
        </p-calendar>
      </div>
    </div>
  </div>
  <div class="ui-g">
    <div class="ui-g ui-g-12 ui-md-6 ui-g-nopad">
      <div class="ui-g-12 ui-md-3 ui-label">
        Notice
      </div>
      <div class="ui-g-12 ui-md-9">
        <textarea pInputTextarea type="text"></textarea>
      </div>
    </div>
    <div class="ui-g ui-g-12 ui-md-6 ui-g-nopad">
      <div class="ui-g-12 ui-md-3 ui-label">
        Destination
      </div>
      <div class="ui-g-12 ui-md-9">
        <p-listbox [options]="cities" [(ngModel)]="selectedCity">
        </p-listbox>
      </div>
    </div>
  </div>
</div>