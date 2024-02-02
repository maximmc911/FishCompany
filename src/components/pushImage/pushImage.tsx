import{ useState } from 'react';
import { ConfigProvider, Upload } from 'antd';
import type { /* GetProp,  */UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const PushImage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

 /*  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML); */
  
  
  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


    const onPreview = async (file: UploadFile) => {
      let src = file.url as string;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj as FileType);
          reader.onload = () => resolve(reader.result as string);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);

  };



  return (
    <>

<ConfigProvider
theme={{
  components:{
    Upload:{
   

    }
  },  
  token: {
    
    },
}}
>
     
    <ImgCrop rotationSlider>


      <Upload

  /*       action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" */
        listType="picture-card"
        className='w-96'
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
>
        {fileList.length < 1 && '+ Upload'}
  
      </Upload>
    </ImgCrop>
        </ConfigProvider>
        </>
  );
};

export default  PushImage ;

function handleFileUpload(newFileList: UploadFile<any>[]) {
  throw new Error('Function not implemented.');
}
