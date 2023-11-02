const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 32 fahrenheit outside, so :insertx: decided to get some hot coco. Once the coco was made they turned on :inserty:, and got under a blanket. It was perfect until :insertz: weighing 50 pounds fell scaring :insertx: so they spilled all there hot coco on there cat Sophie.";

var insertX = ["Kiki", "her father's radio", "her broom"];
var insertY = ["Aang and Katara", "the fire", "Soka's newest experiment"];
var insertZ = ["Kristofferson", "his cousin's toy train", "Fantastic Mr.Fox's new catch"];

randomize.addEventListener('click', result);

function result() {
    console.log("testing hi")
    var newStory = storyText;
    const xitem = randomValueFromArray(insertX);
    const yitem = randomValueFromArray(insertY);
    const zitem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:",xitem);
    newStory = newStory.replace(":inserty:",yitem);
    newStory = newStory.replace(":insertz:",zitem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Sophie",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = '$ Math.round(300/14) stone';
    const temperature = '$ Math.round((94-23)*(5/9)) Centigrade';

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
