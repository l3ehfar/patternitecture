function centerColor() {
  stroke(z_);
  switch (n) {
    case 6:
      if (z_ <= 200) {
        z_ += 0.33;
      } else if (z_ >= 200) {
        stroke(z0_);
        if (z0_ >= 8.6) {
          z0_ -= 0.33;
        } else if (z0_ <= 8.6) {
          n = 12;
          z0_ = 200;
          z_ = 8.6;
        }
      }
      break;
    case 12:
      stroke(z1_);
      if (z1_ <= 200) {
        z1_ += 0.33;
      } else if (z1_ >= 200) {
        stroke(z2_);
        if (z2_ >= 8.6) {
          z2_ -= 0.33;
        } else if (z2_ <= 8.6) {
          n = 24;
          z2_ = 200;
          z1_ = 8.6;
        }
      }
      break;
    case 24:
      stroke(z3_);
      if (z3_ <= 200) {
        z3_ += 0.33;
      } else if (z3_ >= 200) {
        stroke(z4_);
        if (z4_ >= 8.6) {
          z4_ -= 0.33;
        } else if (z4_ <= 8.6) {
          n = 36;
          z3_ = 8.6;
          z4_ = 200;
        }
      }
      break;
    case 36:
      stroke(z5_);
      if (z5_ <= 200) {
        z5_ += 0.33;
      } else if (z5_ >= 200) {
        stroke(z6_);
        if (z6_ >= 8.6) {
          z6_ -= 0.33;
        } else if (z6_ <= 8.6) {
          n = 6;
          z6_ = 200;
          z5_ = 8.6;
        }
      }
      break;
  }
}