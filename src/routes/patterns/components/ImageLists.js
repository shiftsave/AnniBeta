import React from 'react';

import { Card, ImageList } from 'components/baseline';

const references =
[
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3486696/panic_mondays_concept_art_invision_small.jpg", name: "1" },
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3257350/panic_styleframe_amy.png", name: "2"  },
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3486696/panic_mondays_concept_art_invision_small.jpg", name: "3"  },
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3257350/panic_styleframe_amy.png", name: "4" },
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3486696/panic_mondays_concept_art_invision_small.jpg", name: "5"  },
  { url: "https://cdn.dribbble.com/users/787686/screenshots/3486696/panic_mondays_concept_art_invision_small.jpg", name: "6"  }
]

const storyboards =
[
  { url: "http://shiftsave.com/delivery/foodbabieslove/assets/images/storyboards/fbl_storyboards_v1_01.jpg", name: "1" },
  { url: "http://shiftsave.com/delivery/foodbabieslove/assets/images/storyboards/fbl_storyboards_v1_02.jpg", name: "2" },
  { url: "http://shiftsave.com/delivery/foodbabieslove/assets/images/storyboards/fbl_storyboards_v1_03.jpg", name: "3" },
  { url: "http://shiftsave.com/delivery/foodbabieslove/assets/images/storyboards/fbl_storyboards_v1_04.jpg", name: "4" }
]

const ImageLists = () => (
  <Card className='Reference Item'>
    <h4 className='legend'>Images</h4>
    <h4 className='legend'>References</h4>
    <div>
      <ImageList content={references} references />
    </div>
    <h4 className='legend'>Storyboards</h4>
    <div>
      <ImageList content={storyboards} storyboards />
    </div>
  </Card>
);

export default ImageLists;
