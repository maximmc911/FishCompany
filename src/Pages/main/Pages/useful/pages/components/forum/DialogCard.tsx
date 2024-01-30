import { RxAvatar } from "react-icons/rx";

const DialogCard = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-1 border-b-2 border-blue-800">
        <div className="p-2 border-r-2 border-blue-400">
          <RxAvatar
            color='green'
            size={45}
          />
          <p>name user</p>

        </div>
        <div className="pl-4 pr-2">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora excepturi perferendis laudantium, commodi facilis officiis delectus quae architecto provident quibusdam laboriosam possimus pariatur animi aut molestias deleniti sequi rerum.
            Fuga accusamus odit nulla ut quae et, quidem pariatur cumque. Dolore sequi eos nisi assumenda autem exercitationem, iusto, architecto provident soluta ea fugit. Maxime ducimus quidem omnis ea quo quas?</p>
        </div>
      </div>
    </>
  )
}

export default DialogCard