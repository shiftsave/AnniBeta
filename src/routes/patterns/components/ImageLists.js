import React from 'react';
import { ImageList } from 'components/baseline';


const references =
[
  { url: require('./content/references/01.jpg'), name: "1" },
  { url: require('./content/references/02.png'), name: "2"  },
  { url: require('./content/references/03.jpg'), name: "3"  },
  { url: require('./content/references/05.jpg'), name: "5" },
  { url: require('./content/references/06.jpg'), name: "6"  },
  { url: require('./content/references/04.jpg'), name: "4" }
]

const storyboards =
[
  { url: require('./content/storyboards/01.jpg'), name: "1" },
  { url: require('./content/storyboards/02.jpg'), name: "2" },
  { url: require('./content/storyboards/03.jpg'), name: "3" },
  { url: require('./content/storyboards/04.jpg'), name: "4" }
]

const ImageLists = () => (
  <div>
    <h4 className='legend'>Images</h4>
    <h4 className='legend'>References</h4>
    <div>
      <ImageList content={references} references />
    </div>
    <h4 className='legend'>Storyboards</h4>
    <div>
      <ImageList content={storyboards} storyboards />
    </div>
  </div>
);

export default ImageLists;
