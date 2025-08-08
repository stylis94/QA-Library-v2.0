'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ArrowLeft, Target, Lightbulb, BookOpen, Code, Calculator, Table, Brain, Zap, AlertTriangle, Users, FileText } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function TestDesignPage() {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [practiceAnswers, setPracticeAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const checkQuizResults = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Тест-дизайн и техники
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Методы создания эффективных тестов и техники тест-дизайна
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="equivalence" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="equivalence">Эквивалентное разделение</TabsTrigger>
            <TabsTrigger value="boundary">Граничные значения</TabsTrigger>
            <TabsTrigger value="decision">Таблицы решений</TabsTrigger>
            <TabsTrigger value="state">Диаграммы состояний</TabsTrigger>
            <TabsTrigger value="pairwise">Попарное тестирование</TabsTrigger>
            <TabsTrigger value="quiz">Практика и квиз</TabsTrigger>
          </TabsList>

          {/* Equivalence Partitioning */}
          <TabsContent value="equivalence" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Эквивалентное разделение (Equivalence Partitioning)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Основная идея:</strong> Разделить входные данные на группы (классы эквивалентности), 
                    где все значения в группе должны обрабатываться одинаково.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Теория</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Типы классов эквивалентности:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Валидные классы:</strong> Корректные входные данные
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Невалидные классы:</strong> Некорректные входные данные
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Правила создания тестов:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Один тест-кейс для каждого валидного класса</li>
                          <li>• Отдельный тест-кейс для каждого невалидного класса</li>
                          <li>• Не смешивать невалидные классы в одном тесте</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Практический пример</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Задача: Поле "Возраст" (1-120)</h4>
                        
                        <div className="space-y-3">
                          <div>
                            <Badge className="bg-green-100 text-green-800 mb-2">Валидные классы</Badge>
                            <ul className="text-sm space-y-1">
                              <li>• Класс 1: 1 ≤ возраст ≤ 120</li>
                              <li>• Тест: возраст = 25</li>
                            </ul>
                          </div>
                          
                          <div>
                            <Badge className="bg-red-100 text-red-800 mb-2">Невалидные классы</Badge>
                            <ul className="text-sm space-y-1">
                              <li>{'• Класс 2: возраст < 1 → Тест: возраст = 0'}</li>
                              <li>{'• Класс 3: возраст > 120 → Тест: возраст = 121'}</li>
                              <li>• Класс 4: не число → Тест: возраст = "abc"</li>
                              <li>• Класс 5: пустое поле → Тест: возраст = ""</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Сложный пример: Система скидок</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Условие:</h4>
                      <p className="text-sm mb-4">
                        Интернет-магазин предоставляет скидки: 5% для заказов от 1000₽, 
                        10% от 5000₽, 15% от 10000₽. Максимальная скидка 20% для VIP клиентов.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Классы эквивалентности по сумме:</h5>
                          <ul className="text-sm space-y-1">
                            <li>{'• 0 ≤ сумма < 1000 → скидка 0%'}</li>
                            <li>{'• 1000 ≤ сумма < 5000 → скидка 5%'}</li>
                            <li>{'• 5000 ≤ сумма < 10000 → скидка 10%'}</li>
                            <li>{'• сумма ≥ 10000 → скидка 15%'}</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Классы по типу клиента:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Обычный клиент</li>
                            <li>• VIP клиент (+5% к скидке)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Интерактивное упражнение
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Задача: Поле "Количество товара" в корзине (1-99)
                      </h4>
                      <p className="text-sm mb-4">
                        Определите классы эквивалентности и создайте тест-кейсы:
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Валидные классы эквивалентности:
                          </label>
                          <Textarea 
                            placeholder="Например: 1 ≤ количество ≤ 99"
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Невалидные классы эквивалентности:
                          </label>
                          <Textarea 
                            placeholder="Например: количество < 1, количество > 99..."
                            className="text-sm"
                          />
                        </div>
                        
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Проверить ответ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Boundary Value Analysis */}
          <TabsContent value="boundary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Анализ граничных значений (Boundary Value Analysis)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Основная идея:</strong> Большинство ошибок происходит на границах диапазонов. 
                    Тестируем значения на границах и рядом с ними.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Правила BVA</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Для диапазона [a, b] тестируем:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>a-1 (ниже минимума)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>a (минимальное значение)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>a+1 (чуть выше минимума)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>b-1 (чуть ниже максимума)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>b (максимальное значение)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>b+1 (выше максимума)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Пример: Поле "Возраст" (18-65)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Граничные значения:</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <Badge className="bg-red-100 text-red-800 mb-2">Невалидные</Badge>
                            <ul className="space-y-1">
                              <li>• 17 (18-1)</li>
                              <li>• 66 (65+1)</li>
                            </ul>
                          </div>
                          <div>
                            <Badge className="bg-green-100 text-green-800 mb-2">Валидные</Badge>
                            <ul className="space-y-1">
                              <li>• 18 (минимум)</li>
                              <li>• 19 (минимум+1)</li>
                              <li>• 64 (максимум-1)</li>
                              <li>• 65 (максимум)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Сложные случаи BVA</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Строковые поля</h4>
                        <p className="text-sm mb-2">Поле "Имя" (2-50 символов):</p>
                        <ul className="text-sm space-y-1">
                          <li>• 1 символ (невалидно)</li>
                          <li>• 2 символа (минимум)</li>
                          <li>• 3 символа (минимум+1)</li>
                          <li>• 49 символов (максимум-1)</li>
                          <li>• 50 символов (максимум)</li>
                          <li>• 51 символ (невалидно)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Массивы и списки</h4>
                        <p className="text-sm mb-2">Список товаров (1-10 элементов):</p>
                        <ul className="text-sm space-y-1">
                          <li>• 0 элементов (пустой список)</li>
                          <li>• 1 элемент (минимум)</li>
                          <li>• 2 элемента (минимум+1)</li>
                          <li>• 9 элементов (максимум-1)</li>
                          <li>• 10 элементов (максимум)</li>
                          <li>• 11 элементов (превышение)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Практическое задание
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Задача: Поле "Цена товара" (0.01₽ - 999999.99₽)
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Перечислите все граничные значения для тестирования:
                          </label>
                          <Textarea 
                            placeholder="Например: 0.00, 0.01, 0.02..."
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Какие дополнительные тесты вы бы добавили?
                          </label>
                          <Textarea 
                            placeholder="Например: отрицательные числа, нечисловые значения..."
                            className="text-sm"
                          />
                        </div>
                        
                        <Button className="bg-green-600 hover:bg-green-700">
                          Проверить решение
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Decision Tables */}
          <TabsContent value="decision" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Table className="w-5 h-5" />
                  Таблицы решений (Decision Tables)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Применение:</strong> Когда результат зависит от комбинации нескольких условий. 
                    Помогает найти все возможные сценарии и избежать пропусков.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Структура таблицы решений</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Условия</th>
                              <th className="text-center p-2">Правило 1</th>
                              <th className="text-center p-2">Правило 2</th>
                              <th className="text-center p-2">...</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-2">Условие 1</td>
                              <td className="text-center p-2">T/F</td>
                              <td className="text-center p-2">T/F</td>
                              <td className="text-center p-2">...</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">Условие 2</td>
                              <td className="text-center p-2">T/F</td>
                              <td className="text-center p-2">T/F</td>
                              <td className="text-center p-2">...</td>
                            </tr>
                            <tr className="border-b border-double border-b-4">
                              <td className="p-2"><strong>Действия</strong></td>
                              <td className="text-center p-2"></td>
                              <td className="text-center p-2"></td>
                              <td className="text-center p-2"></td>
                            </tr>
                            <tr>
                              <td className="p-2">Действие 1</td>
                              <td className="text-center p-2">X/-</td>
                              <td className="text-center p-2">X/-</td>
                              <td className="text-center p-2">...</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="text-sm">
                        <p><strong>Обозначения:</strong></p>
                        <ul className="space-y-1 mt-2">
                          <li>• T (True) - условие выполнено</li>
                          <li>• F (False) - условие не выполнено</li>
                          <li>• X - действие выполняется</li>
                          <li>• - (тире) - действие не выполняется</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Пример: Система входа</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm mb-4">
                        <p><strong>Условия:</strong></p>
                        <ul className="space-y-1">
                          <li>• Логин корректный</li>
                          <li>• Пароль корректный</li>
                          <li>• Аккаунт активен</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-1">Условия</th>
                              <th className="text-center p-1">R1</th>
                              <th className="text-center p-1">R2</th>
                              <th className="text-center p-1">R3</th>
                              <th className="text-center p-1">R4</th>
                              <th className="text-center p-1">R5</th>
                              <th className="text-center p-1">R6</th>
                              <th className="text-center p-1">R7</th>
                              <th className="text-center p-1">R8</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-1">Логин корректный</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">F</td>
                            </tr>
                            <tr>
                              <td className="p-1">Пароль корректный</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">F</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-1">Аккаунт активен</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                              <td className="text-center p-1">T</td>
                              <td className="text-center p-1">F</td>
                            </tr>
                            <tr className="border-b border-double border-b-2">
                              <td className="p-1 font-bold">Действия</td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                              <td className="text-center p-1"></td>
                            </tr>
                            <tr>
                              <td className="p-1">Вход разрешен</td>
                              <td className="text-center p-1 text-green-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                            </tr>
                            <tr>
                              <td className="p-1">Ошибка "Аккаунт заблокирован"</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                            </tr>
                            <tr>
                              <td className="p-1">Ошибка "Неверные данные"</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                              <td className="text-center p-1 text-red-600">X</td>
                              <td className="text-center p-1">-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Сложный пример: Система скидок</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Условия для скидки:</h4>
                      <ul className="text-sm space-y-1 mb-4">
                        <li>• Клиент VIP (скидка +5%)</li>
                        <li>{'• Сумма заказа ≥ 5000₽ (скидка 10%)'}</li>
                        <li>• Есть промокод (скидка 15%)</li>
                        <li>• Первый заказ (скидка 5%)</li>
                      </ul>
                      
                      <p className="text-sm font-medium">Правила:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Скидки суммируются</li>
                        <li>• Максимальная скидка 25%</li>
                        <li>• VIP скидка действует только при заказе от 1000₽</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Задание:</h4>
                      <p className="text-sm mb-3">
                        Создайте таблицу решений для данной системы скидок. 
                        Учтите все возможные комбинации условий.
                      </p>
                      
                      <Textarea 
                        placeholder="Опишите вашу таблицу решений или нарисуйте схему..."
                        className="text-sm min-h-32"
                      />
                      
                      <Button className="mt-3 bg-purple-600 hover:bg-purple-700">
                        Проверить решение
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* State Transition */}
          <TabsContent value="state" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Диаграммы состояний (State Transition Diagrams)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Применение:</strong> Для систем, где объект может находиться в разных состояниях 
                    и переходить между ними при определенных событиях.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Основные элементы</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm"><strong>Состояние</strong> - текущее положение объекта</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <div className="w-4 h-0.5 bg-green-500"></div>
                            <div className="w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                          </div>
                          <span className="text-sm"><strong>Переход</strong> - изменение состояния</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                            событие
                          </div>
                          <span className="text-sm"><strong>Событие</strong> - триггер перехода</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 border border-red-500 rounded-full"></div>
                          </div>
                          <span className="text-sm"><strong>Конечное состояние</strong></span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Пример: Банкомат</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <div className="text-center space-y-4">
                          <div className="flex justify-center">
                            <div className="w-16 h-8 border-2 border-blue-500 rounded flex items-center justify-center text-xs">
                              Ожидание
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center">
                            <div className="text-xs text-gray-600">вставка карты</div>
                            <div className="mx-2">↓</div>
                          </div>
                          
                          <div className="flex justify-center">
                            <div className="w-16 h-8 border-2 border-green-500 rounded flex items-center justify-center text-xs">
                              Ввод PIN
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center gap-4">
                            <div className="text-center">
                              <div className="text-xs text-gray-600 mb-1">PIN верный</div>
                              <div>↓</div>
                              <div className="w-16 h-8 border-2 border-purple-500 rounded flex items-center justify-center text-xs mt-1">
                                Меню
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-600 mb-1">PIN неверный</div>
                              <div>↗</div>
                              <div className="w-16 h-8 border-2 border-red-500 rounded flex items-center justify-center text-xs mt-1">
                                Блокировка
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Сложный пример: Заказ в интернет-магазине</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Состояния заказа:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="w-full h-8 border-2 border-blue-500 rounded flex items-center justify-center text-xs mb-2">
                            Создан
                          </div>
                          <p className="text-xs text-gray-600">Заказ оформлен</p>
                        </div>
                        <div className="text-center">
                          <div className="w-full h-8 border-2 border-yellow-500 rounded flex items-center justify-center text-xs mb-2">
                            Оплачен
                          </div>
                          <p className="text-xs text-gray-600">Платеж прошел</p>
                        </div>
                        <div className="text-center">
                          <div className="w-full h-8 border-2 border-purple-500 rounded flex items-center justify-center text-xs mb-2">
                            Собран
                          </div>
                          <p className="text-xs text-gray-600">Готов к отправке</p>
                        </div>
                        <div className="text-center">
                          <div className="w-full h-8 border-2 border-green-500 rounded flex items-center justify-center text-xs mb-2">
                            Доставлен
                          </div>
                          <p className="text-xs text-gray-600">Получен клиентом</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Возможные переходы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Создан → Оплачен (успешная оплата)</li>
                          <li>• Создан → Отменен (отмена клиентом)</li>
                          <li>• Оплачен → Собран (сборка заказа)</li>
                          <li>• Оплачен → Возврат (отмена после оплаты)</li>
                          <li>• Собран → Доставлен (успешная доставка)</li>
                          <li>• Собран → Возврат (проблемы с доставкой)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Практическое задание
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Задача: Система авторизации с двухфакторной аутентификацией
                      </h4>
                      <p className="text-sm mb-4">
                        Создайте диаграмму состояний для системы входа с SMS-подтверждением:
                      </p>
                      
                      <div className="text-sm mb-4">
                        <p><strong>Состояния:</strong> Ожидание входа, Ввод логина/пароля, Отправка SMS, Ввод кода, Авторизован, Заблокирован</p>
                        <p><strong>События:</strong> Ввод данных, Успешная проверка, Ошибка, Превышение попыток, Таймаут</p>
                      </div>
                      
                      <Textarea 
                        placeholder="Опишите переходы между состояниями или нарисуйте схему..."
                        className="text-sm min-h-32"
                      />
                      
                      <Button className="mt-3 bg-indigo-600 hover:bg-indigo-700">
                        Проверить диаграмму
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pairwise Testing */}
          <TabsContent value="pairwise" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Попарное тестирование (Pairwise Testing)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Основная идея:</strong> Большинство дефектов вызвано взаимодействием двух параметров. 
                    Тестируем все возможные пары значений параметров.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Преимущества Pairwise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Сокращение количества тестов</p>
                            <p className="text-xs text-gray-600">Вместо полного перебора - оптимальный набор</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Высокое покрытие дефектов</p>
                            <p className="text-xs text-gray-600">Находит 50-90% всех багов</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">Систематический подход</p>
                            <p className="text-xs text-gray-600">Исключает случайный выбор тестов</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Пример экономии:</h4>
                        <p className="text-xs">
                          3 параметра по 4 значения = 4³ = 64 теста<br/>
                          С Pairwise = всего 16 тестов (75% экономии!)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Простой пример</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">Тестирование веб-формы:</h4>
                        
                        <div className="space-y-2 text-sm">
                          <p><strong>Браузер:</strong> Chrome, Firefox, Safari</p>
                          <p><strong>ОС:</strong> Windows, macOS, Linux</p>
                          <p><strong>Разрешение:</strong> 1920x1080, 1366x768</p>
                        </div>
                        
                        <div className="mt-4">
                          <p className="font-medium text-sm mb-2">Полный перебор: 3×3×2 = 18 тестов</p>
                          <p className="font-medium text-sm mb-2">Pairwise: 9 тестов</p>
                        </div>
                        
                        <div className="mt-4 bg-white dark:bg-slate-800 p-3 rounded">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-1">Тест</th>
                                <th className="text-left p-1">Браузер</th>
                                <th className="text-left p-1">ОС</th>
                                <th className="text-left p-1">Разрешение</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td className="p-1">1</td><td className="p-1">Chrome</td><td className="p-1">Windows</td><td className="p-1">1920x1080</td></tr>
                              <tr><td className="p-1">2</td><td className="p-1">Chrome</td><td className="p-1">macOS</td><td className="p-1">1366x768</td></tr>
                              <tr><td className="p-1">3</td><td className="p-1">Firefox</td><td className="p-1">Windows</td><td className="p-1">1366x768</td></tr>
                              <tr><td className="p-1">4</td><td className="p-1">Firefox</td><td className="p-1">Linux</td><td className="p-1">1920x1080</td></tr>
                              <tr><td className="p-1">5</td><td className="p-1">Safari</td><td className="p-1">macOS</td><td className="p-1">1920x1080</td></tr>
                              <tr><td className="p-1">6</td><td className="p-1">Safari</td><td className="p-1">Linux</td><td className="p-1">1366x768</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Инструменты для Pairwise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">PICT (Microsoft)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Бесплатный</li>
                          <li>• Командная строка</li>
                          <li>• Поддержка ограничений</li>
                          <li>• Высокая производительность</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">AllPairs</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Веб-интерфейс</li>
                          <li>• Простота использования</li>
                          <li>• Экспорт в Excel</li>
                          <li>• Онлайн доступ</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">TestCase Studio</h4>
                        <ul className="text-sm space-y-1">
                          <li>• GUI интерфейс</li>
                          <li>• Визуализация</li>
                          <li>• Интеграция с TMS</li>
                          <li>• Расширенные функции</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Сложное задание
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Задача: Мобильное приложение интернет-банка
                      </h4>
                      
                      <div className="text-sm mb-4">
                        <p className="mb-2"><strong>Параметры для тестирования:</strong></p>
                        <ul className="space-y-1">
                          <li>• <strong>Платформа:</strong> iOS, Android</li>
                          <li>• <strong>Версия ОС:</strong> Старая, Текущая, Новая</li>
                          <li>• <strong>Тип подключения:</strong> WiFi, 4G, 3G</li>
                          <li>• <strong>Размер экрана:</strong> Маленький, Средний, Большой</li>
                          <li>• <strong>Тип операции:</strong> Перевод, Платеж, Просмотр баланса</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Сколько тестов потребуется при полном переборе?
                          </label>
                          <Input 
                            placeholder="Рассчитайте количество комбинаций"
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Создайте набор тестов используя Pairwise подход:
                          </label>
                          <Textarea 
                            placeholder="Опишите ваш набор тестов..."
                            className="text-sm min-h-32"
                          />
                        </div>
                        
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          Проверить решение
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quiz and Practice */}
          <TabsContent value="quiz" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Итоговый квиз по тест-дизайну
                </CardTitle>
                <CardDescription>
                  Проверьте свои знания техник тест-дизайна
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question 1 */}
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">
                    1. Какая техника лучше всего подходит для тестирования поля "Возраст" (18-65)?
                  </h4>
                  <div className="space-y-2">
                    {['Эквивалентное разделение', 'Граничные значения', 'Таблицы решений', 'Попарное тестирование'].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`q1-${index}`}
                          checked={quizAnswers.q1 === option}
                          onCheckedChange={() => handleQuizAnswer('q1', option)}
                        />
                        <label htmlFor={`q1-${index}`} className="text-sm">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">
                    2. Для системы с 4 параметрами по 3 значения каждый, сколько тестов нужно при полном переборе?
                  </h4>
                  <div className="space-y-2">
                    {['12', '27', '64', '81'].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`q2-${index}`}
                          checked={quizAnswers.q2 === option}
                          onCheckedChange={() => handleQuizAnswer('q2', option)}
                        />
                        <label htmlFor={`q2-${index}`} className="text-sm">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">
                    3. Когда следует использовать таблицы решений?
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Для тестирования граничных значений',
                      'Когда результат зависит от комбинации условий',
                      'Для тестирования состояний объекта',
                      'Только для числовых полей'
                    ].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`q3-${index}`}
                          checked={quizAnswers.q3 === option}
                          onCheckedChange={() => handleQuizAnswer('q3', option)}
                        />
                        <label htmlFor={`q3-${index}`} className="text-sm">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question 4 */}
                <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">
                    4. Что НЕ является преимуществом попарного тестирования?
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Сокращение количества тестов',
                      'Высокое покрытие дефектов',
                      'Гарантия нахождения всех багов',
                      'Систематический подход'
                    ].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`q4-${index}`}
                          checked={quizAnswers.q4 === option}
                          onCheckedChange={() => handleQuizAnswer('q4', option)}
                        />
                        <label htmlFor={`q4-${index}`} className="text-sm">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={checkQuizResults}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Проверить результаты
                </Button>

                {showResults && (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Результаты квиза:</strong>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>1. Правильный ответ: "Граничные значения" - для числовых диапазонов</p>
                        <p>2. Правильный ответ: "81" - 3⁴ = 81 комбинация</p>
                        <p>3. Правильный ответ: "Когда результат зависит от комбинации условий"</p>
                        <p>4. Правильный ответ: "Гарантия нахождения всех багов" - такой гарантии нет</p>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Practical Exercise */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Практическое задание
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Комплексная задача: Система бронирования отелей
                      </h4>
                      
                      <div className="text-sm mb-4">
                        <p className="mb-2"><strong>Требования:</strong></p>
                        <ul className="space-y-1">
                          <li>• Дата заезда: от сегодня до +1 года</li>
                          <li>• Количество ночей: 1-30</li>
                          <li>• Количество гостей: 1-8</li>
                          <li>• Тип номера: Стандарт, Люкс, Президентский</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Определите классы эквивалентности для каждого параметра:
                          </label>
                          <Textarea 
                            placeholder="Например: Валидные даты, Невалидные даты..."
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Какие граничные значения вы бы протестировали?
                          </label>
                          <Textarea 
                            placeholder="Например: Сегодня, +1 год, 0 ночей, 31 ночь..."
                            className="text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Какие комбинации параметров вы бы проверили с помощью Pairwise?
                          </label>
                          <Textarea 
                            placeholder="Опишите ваш набор тестов..."
                            className="text-sm min-h-32"
                          />
                        </div>
                        
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Составить план тестирования
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
