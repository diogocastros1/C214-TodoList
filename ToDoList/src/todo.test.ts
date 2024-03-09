import { TodoList } from "./TodoList"

const anyTask = {
  title: 'any_title',
  description: 'any_desciption',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('TodoList', () => {
  describe('Add teste', () => {
    test('Add uma nova task a lista', () => {
      const todoInstance = new TodoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([anyTask])
    })

    test('Add uma task valida', () => {
      const todoInstance = new TodoList()
      const x: any = {
        a: 'aaaaaa'
      }
      todoInstance.add(x)
      const tasks = todoInstance.getTask()
      expect(tasks).toEqual([])
    })
  })
})