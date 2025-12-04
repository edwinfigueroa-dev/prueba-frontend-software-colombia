import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetail } from './heroes-detail';

describe('HeroesDetail', () => {
  let component: HeroesDetail;
  let fixture: ComponentFixture<HeroesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
