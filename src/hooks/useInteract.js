import { pick } from 'ramda'
import { useState, useEffect, useRef } from 'react'
import interact from 'interactjs'

const initialValues = {
  x: 0,
  y: 0,
  elto: null,
  isMultiple: false,
}

const useInteract = (initData = initialValues) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const [data, setData] = useState({
    ...initialValues,
    ...initData,
  })

  const interactRef = useRef(null)
  let { x, y } = data
  const { isMultiple } = data

  const stop = () => interact(interactRef.current).unset()
  const initiate = () => {
    interact(
      data.elto.getIsSelected() ? '.multiple' : interactRef.current
    ).draggable({
      onstart: event => {},
      onmove: event => {
        x += event.dx
        y += event.dy
        setData({ ...data, x, y })
      },
      onend: event => {
        data.elto.updateLeft(x)
        console.log(x)
        data.elto.updateTop(y)
      },
    })

    interact(interactRef.current).on('doubletap', event => {
      data.elto.updateSelected()
    })
  }

  useEffect(() => {
    if (isEnabled) {
      initiate()
    } else {
      stop()
    }
    return stop
  }, [isEnabled, data.elto.selected])

  return {
    ref: interactRef,
    position: pick(['x', 'y'], data),
    initiate: () => setIsEnabled(true),
    stop: () => setIsEnabled(false),
    style: {
      transform: `translate(${data.x}px, ${data.y}px)`,
      position: 'absolute',
    },
  }
}

export default useInteract
