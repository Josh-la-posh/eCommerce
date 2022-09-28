import { type } from "@testing-library/user-event/dist/type"
import { SEARCHFIELD } from "./constant"

export const setSearch = (text) => {
    type = SEARCHFIELD,
    payload = text
}