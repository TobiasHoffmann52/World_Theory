let co2_stat = 25;
let hap_stat = 22;
let gdp_stat = 75;
let pop_stat = 6.2;

function renderStat () {
  push();

  // Moves (0,0) point to left bottom
  translate(0, height);
  fill(230);
  rect(0, 0, 1200, -100);

  // Writes CO2 text
  fill(0);
  textSize(25);
  text("CO2", 50, -40);

  // Makes outer transparent CO2 rectangle
  stroke(1);
  fill(230);
  rect(120, -60, 200, 25);

  // Makes inner C02 rectangle and calculates length based on the current value
  noStroke();
  if (co2_stat < 30) {
    fill("red");
  } else if (co2_stat < 70) {
    fill("yellow");
  } else if (co2_stat <= 100) {
    fill("green");
  }
  rect(120, -60, (co2_stat/100)*200, 25);

  // Displays happiness smiley
  if (hap_stat < 30) {
    image(rsmiley, 340, -70, 50, 50);
  } else if (hap_stat < 70) {
    image(ysmiley, 340, -70, 50, 50);
  } else if (hap_stat <= 100) {
    image(gsmiley, 340, -70, 50, 50);
  }

  // Makes outer transparent happiness rectangle
  stroke(1);
  fill(230);
  rect(410, -60, 200, 25);

  // Makes inner happiness rectangle and calculates length based on the current value
  noStroke();
  if (hap_stat < 30) {
    fill("red");
  } else if (hap_stat < 70) {
    fill("yellow");
  } else if (hap_stat <= 100) {
    fill("green");
  }
  rect(410, -60, (hap_stat/100)*200, 25);

  // Writes GDP text
  fill(0);
  textSize(25);
  text("GDP", 630, -40);

  // Makes outer transparent GDP rectangle
  stroke(1);
  fill(230);
  rect(700, -60, 200, 25);

  // Makes inner GDP rectangle and calculates length based on the current value
  noStroke();
  if (gdp_stat < 30) {
    fill("red");
  } else if (gdp_stat < 70) {
    fill("yellow");
  } else if (gdp_stat <= 100) {
    fill("green");
  }
  rect(700, -60, (gdp_stat/100)*200, 25);

  // Writes population text
  fill(0);
  textSize(25);
  text("Population: " + pop_stat + " mio.", 940, -40);

  pop();
}
