import { useState } from 'react';
import img1 from '../src/html/images/01.jpg';
import img2 from '../src/html/images/02.jpg';
import img3 from '../src/html/images/03.jpg';
import img4 from '../src/html/images/04.jpg';

export default function App() {
  // 建立變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 圖片陣列
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        <div style={{ //display: "flex", 
          width: "700px",
          // justifyContent: "space-around" 
          margin:"50px auto",
          textAlign:"center"

        }}>
 
          {/* 大圖區 */}
          <div>
            <img
              src={arrPhotos[currentImgIndex]}
              alt="large-photo"
              width={580}
              height={400}
              style={{ border: "2px solid #ccc", borderRadius: "8px" }}
            />
          </div>

                   {/* 縮圖區 */}
                   <div
            style={{
              display: "flex",
             // flexDirection: "column",
             // justifyContent: "space-around",
             // alignItems: "center",
             justifyContent:"center",
             marginTop:"20px"
            }}
          >
            {arrPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`photo`}
                width={100}
                height={80}
                onMouseOver={() => setCurrentImgIndex(index)}
                style={{ cursor: "pointer", 
                  marginRight:"5px"
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
