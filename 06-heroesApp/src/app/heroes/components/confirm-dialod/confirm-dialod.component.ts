import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialod',
  templateUrl: './confirm-dialod.component.html',
  styles: [
  ]
})
export class ConfirmDialodComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
