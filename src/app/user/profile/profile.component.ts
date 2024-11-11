// ProfileComponent to display and update user profile information
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Load the user profile data when the component loads
    this.userService.getUserProfile().subscribe({
      next: (data) => this.userProfile = data,
      error: (err) => console.error('Error loading profile:', err)
    });
  }
}
