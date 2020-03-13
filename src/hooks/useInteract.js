import { pick } from 'ramda'
import { useCallback, useState, useEffect, useRef } from 'react'
import interact from 'interactjs'

const initialValues = {
  x: 0,
  y: 0,
  elto: null,
}

const useInteract = (initData = initialValues) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const [interactRef] = useState(useRef(null))
  const [data, setData] = useState({
    ...initialValues,
    ...initData,
  })

  let { x, y } = data

  const stop = () => interact(interactRef.current).unset()

  const initiate = useCallback(() => {
    interact(
      data.elto.getIsSelected() ? '.multiple' : interactRef.current
    ).draggable({
      onstart: () => {},
      onmove: event => {
        x += event.dx
        y += event.dy
        setData({ ...data, x, y })
      },
      onend: () => {
        // update left/top on this box
        data.elto.updateLeft(x)
        data.elto.updateTop(y)
      },
    })

    interact(interactRef.current).on('doubletap', () => {
      data.elto.updateSelected()
    })
  }, [data.elto.selected])

  useEffect(() => {
    if (isEnabled) {
      initiate()
    } else {
      stop()
    }
    return stop
  }, [isEnabled, initiate])

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
