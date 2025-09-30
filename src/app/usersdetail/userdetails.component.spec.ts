import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsComponent } from './userdetails.component';

describe('BookdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
