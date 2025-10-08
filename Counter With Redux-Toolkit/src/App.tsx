import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './features/Counter/counterSlice';
import type { RootState } from './Store/store';
import { FaPlus, FaMinus, FaUndo } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* 🌀 Animated gradient rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 opacity-20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-l from-blue-500 via-cyan-400 to-green-400 opacity-20 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse"></div>
      </div>

      {/* 🌟 Counter Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-3xl p-10 max-w-md w-full text-center overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
        {/* glowing animated border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-400 via-white to-orange-600 opacity-40 blur-lg"></div>

        <div className="relative z-10">
          {/* Header */}
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Redux Counter
          </h1>
          <p className="text-black text-sm mb-10 tracking-wide">
            A beautifully simple counting app
          </p>

          {/* Count Display */}
          <div className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl py-10 mb-10 shadow-inner hover:shadow-[inset_0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="text-[100px] font-bold text-black drop-shadow-md">
              {count}
            </div>
            <div className="text-black uppercase text-sm tracking-widest mt-2">
              Current Count
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              {/* Increment */}
              <button
                onClick={() => dispatch(increment())}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <FaPlus className="text-lg" />
                <span>Increment</span>
              </button>

              {/* Decrement */}
              <button
                onClick={() => dispatch(decrement())}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
              >
                <FaMinus className="text-lg" />
                <span>Decrement</span>
              </button>
            </div>

            {/* Reset */}
            <button
              onClick={() => dispatch(reset())}
              className="w-full flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              <FaUndo className="text-lg" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
