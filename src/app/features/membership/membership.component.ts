import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'sunrise-membership',

    imports: [CommonModule],
    template: `
    <div class="max-w-[1320px] mx-auto px-4 py-16 animate-fade-in text-center">
       <h1 class="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Membership</h1>
       <p class="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">Join the Sunrise Elite Club for exclusive benefits, priority booking, and special rates.</p>
       
       <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="border border-gray-200 p-8 rounded-2xl">
              <h3 class="text-xl font-bold mb-4">Silver</h3>
              <p class="text-3xl font-bold text-primary mb-6">Free</p>
              <ul class="text-left space-y-3 mb-8 text-text-secondary">
                  <li>✓ Member-only rates</li>
                  <li>✓ Early check-in (subject to availability)</li>
              </ul>
              <button class="w-full py-3 border border-primary text-primary rounded-lg font-medium hover:bg-gray-50">Join Now</button>
          </div>
           <div class="border border-accent bg-gray-900 text-white p-8 rounded-2xl transform md:-translate-y-4 shadow-xl">
              <h3 class="text-xl font-bold mb-4 text-accent">Gold</h3>
              <p class="text-3xl font-bold mb-6">$200<span class="text-sm font-normal text-gray-400">/year</span></p>
              <ul class="text-left space-y-3 mb-8 text-gray-300">
                  <li>✓ All Silver benefits</li>
                  <li>✓ Room upgrades</li>
                  <li>✓ Late check-out</li>
                  <li>✓ Welcome amenity</li>
              </ul>
              <button class="w-full py-3 bg-accent text-primary rounded-lg font-bold hover:bg-white transition-colors">Select Plan</button>
          </div>
           <div class="border border-gray-200 p-8 rounded-2xl">
              <h3 class="text-xl font-bold mb-4">Platinum</h3>
              <p class="text-3xl font-bold text-primary mb-6">$500<span class="text-sm font-normal text-gray-400">/year</span></p>
              <ul class="text-left space-y-3 mb-8 text-text-secondary">
                   <li>✓ All Gold benefits</li>
                  <li>✓ Airport transfers</li>
                  <li>✓ Dedicated concierge</li>
                  <li>✓ Spa credits</li>
              </ul>
              <button class="w-full py-3 border border-primary text-primary rounded-lg font-medium hover:bg-gray-50">Select Plan</button>
          </div>
       </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembershipComponent { }
