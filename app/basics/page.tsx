import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, ArrowLeft, BookOpen, Users, Cog, Target } from 'lucide-react'
import Link from "next/link"

export default function BasicsPage() {
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
                Основы тестирования
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Фундаментальные знания о QA и тестировании ПО
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="what-is-qa" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="what-is-qa">Что такое QA</TabsTrigger>
            <TabsTrigger value="sdlc">SDLC</TabsTrigger>
            <TabsTrigger value="stlc">STLC</TabsTrigger>
            <TabsTrigger value="levels">Уровни</TabsTrigger>
            <TabsTrigger value="types">Типы</TabsTrigger>
          </TabsList>

          <TabsContent value="what-is-qa" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Что такое QA и зачем оно нужно?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>QA (Quality Assurance)</strong> - это процесс обеспечения качества программного продукта на всех этапах его разработки.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">QA vs QC vs Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <Badge className="mb-2">QA (Quality Assurance)</Badge>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Процесс предотвращения дефектов. Фокус на процессах разработки.
                          </p>
                        </div>
                        <div>
                          <Badge className="mb-2">QC (Quality Control)</Badge>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Процесс обнаружения дефектов. Фокус на продукте.
                          </p>
                        </div>
                        <div>
                          <Badge className="mb-2">Testing</Badge>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Процесс выполнения программы для поиска ошибок.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Зачем нужно тестирование?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Обнаружение дефектов до релиза
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Повышение качества продукта
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Снижение рисков и затрат
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Удовлетворение требований пользователей
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          Соответствие стандартам и регуляциям
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Принципы тестирования</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">1. Тестирование показывает наличие дефектов</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Тестирование может показать, что дефекты присутствуют, но не может доказать их отсутствие.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">2. Исчерпывающее тестирование невозможно</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Тестирование всех комбинаций входных данных и предусловий практически невозможно.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">3. Раннее тестирование</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Тестирование должно начинаться как можно раньше в жизненном цикле разработки.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">4. Скопление дефектов</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Небольшое количество модулей содержит большинство дефектов.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">5. Парадокс пестицида</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Если одни и те же тесты повторяются, они перестают находить новые дефекты.
                          </p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium text-sm mb-1">6. Тестирование зависит от контекста</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Тестирование выполняется по-разному в зависимости от контекста.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdlc" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="w-5 h-5" />
                  Жизненный цикл разработки ПО (SDLC)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>SDLC</strong> - это процесс планирования, создания, тестирования и развертывания информационной системы.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                      </div>
                      <CardTitle className="text-lg">Планирование</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Анализ требований</li>
                        <li>• Планирование ресурсов</li>
                        <li>• Оценка рисков</li>
                        <li>• Создание проектного плана</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                      </div>
                      <CardTitle className="text-lg">Анализ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Сбор требований</li>
                        <li>• Анализ бизнес-процессов</li>
                        <li>• Создание спецификаций</li>
                        <li>• Валидация требований</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                      </div>
                      <CardTitle className="text-lg">Дизайн</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Архитектурный дизайн</li>
                        <li>• Дизайн интерфейса</li>
                        <li>• Дизайн базы данных</li>
                        <li>• Техническая спецификация</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                      </div>
                      <CardTitle className="text-lg">Разработка</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Написание кода</li>
                        <li>• Code Review</li>
                        <li>• Unit тестирование</li>
                        <li>• Интеграция модулей</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 dark:border-red-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-red-600 dark:text-red-400 font-bold text-sm">5</span>
                      </div>
                      <CardTitle className="text-lg">Тестирование</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Системное тестирование</li>
                        <li>• Интеграционное тестирование</li>
                        <li>• Приемочное тестирование</li>
                        <li>• Регрессионное тестирование</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-teal-200 dark:border-teal-800">
                    <CardHeader className="pb-3">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-2">
                        <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">6</span>
                      </div>
                      <CardTitle className="text-lg">Развертывание</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Подготовка среды</li>
                        <li>• Развертывание системы</li>
                        <li>• Обучение пользователей</li>
                        <li>• Поддержка и сопровождение</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Модели SDLC</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-2">Waterfall (Водопад)</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            Последовательная модель, где каждая фаза завершается перед началом следующей.
                          </p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Простота</Badge>
                            <Badge variant="outline" className="text-xs">Документация</Badge>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-2">Agile</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            Итеративная модель с короткими циклами разработки и постоянной обратной связью.
                          </p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Гибкость</Badge>
                            <Badge variant="outline" className="text-xs">Итерации</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-2">V-Model</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            Расширение Waterfall с акцентом на тестирование на каждом этапе разработки.
                          </p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Тестирование</Badge>
                            <Badge variant="outline" className="text-xs">Валидация</Badge>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-medium mb-2">DevOps</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                            Интеграция разработки и операций с автоматизацией и непрерывной доставкой.
                          </p>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs">Автоматизация</Badge>
                            <Badge variant="outline" className="text-xs">CI/CD</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stlc" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Жизненный цикл тестирования (STLC)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>STLC</strong> - это последовательность действий, выполняемых во время процесса тестирования для обеспечения качества программного обеспечения.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                        </div>
                        <CardTitle className="text-lg">Анализ требований</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Изучение требований</li>
                            <li>• Выявление тестируемых требований</li>
                            <li>• Анализ автоматизации</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Требования к ПО</li>
                            <li>• Acceptance Criteria</li>
                            <li>• Архитектурные документы</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• RTM (Requirements Traceability Matrix)</li>
                            <li>• Список автоматизируемых тестов</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                        </div>
                        <CardTitle className="text-lg">Планирование тестирования</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Создание тест-плана</li>
                            <li>• Выбор инструментов</li>
                            <li>• Оценка усилий</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Требования</li>
                            <li>• RTM</li>
                            <li>• Архитектура системы</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Тест-план</li>
                            <li>• Стратегия тестирования</li>
                            <li>• Оценка усилий</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                        </div>
                        <CardTitle className="text-lg">Дизайн тест-кейсов</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Создание тест-кейсов</li>
                            <li>• Создание тестовых данных</li>
                            <li>• Ревью тест-кейсов</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Тест-план</li>
                            <li>• RTM</li>
                            <li>• Функциональные требования</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Тест-кейсы</li>
                            <li>• Тестовые данные</li>
                            <li>• RTM (обновленная)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                        </div>
                        <CardTitle className="text-lg">Настройка тестовой среды</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Настройка тест-среды</li>
                            <li>• Подготовка тестовых данных</li>
                            <li>• Smoke тестирование</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Тест-план</li>
                            <li>• Smoke тест-кейсы</li>
                            <li>• Тестовые данные</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Готовая тест-среда</li>
                            <li>• Результаты Smoke тестов</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                          <span className="text-red-600 dark:text-red-400 font-bold text-sm">5</span>
                        </div>
                        <CardTitle className="text-lg">Выполнение тестов</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Выполнение тест-кейсов</li>
                            <li>• Создание баг-репортов</li>
                            <li>• Ретест и регрессия</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Тест-кейсы</li>
                            <li>• Тестовые данные</li>
                            <li>• Готовая тест-среда</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Результаты выполнения</li>
                            <li>• Баг-репорты</li>
                            <li>• Обновленная RTM</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-teal-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">6</span>
                        </div>
                        <CardTitle className="text-lg">Завершение тестирования</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Активности:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Анализ критериев выхода</li>
                            <li>• Подготовка отчетов</li>
                            <li>• Сбор метрик</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Входные данные:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Результаты тестирования</li>
                            <li>• Баг-репорты</li>
                            <li>• Тест-план</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-2">Результат:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Отчет о тестировании</li>
                            <li>• Метрики качества</li>
                            <li>• Lessons Learned</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="levels" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Уровни тестирования</CardTitle>
                <CardDescription>
                  Различные уровни тестирования в зависимости от масштаба и целей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">UNIT</span>
                        </div>
                        Unit Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Тестирование отдельных компонентов или модулей программы изолированно.
                      </p>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Характеристики:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Выполняется разработчиками</li>
                          <li>• Автоматизированное</li>
                          <li>• Быстрое выполнение</li>
                          <li>• Изолированное тестирование</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Инструменты:</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">JUnit</Badge>
                          <Badge variant="outline" className="text-xs">NUnit</Badge>
                          <Badge variant="outline" className="text-xs">Jest</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <span className="text-green-600 dark:text-green-400 font-bold text-xs">INT</span>
                        </div>
                        Integration Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Тестирование взаимодействия между интегрированными компонентами.
                      </p>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Типы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Big Bang Integration</li>
                          <li>• Top-down Integration</li>
                          <li>• Bottom-up Integration</li>
                          <li>• Sandwich/Hybrid</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Фокус:</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">API</Badge>
                          <Badge variant="outline" className="text-xs">Database</Badge>
                          <Badge variant="outline" className="text-xs">Services</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400 font-bold text-xs">SYS</span>
                        </div>
                        System Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Тестирование полной интегрированной системы для проверки соответствия требованиям.
                      </p>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Включает:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Функциональное тестирование</li>
                          <li>• Нефункциональное тестирование</li>
                          <li>• End-to-end тестирование</li>
                          <li>• Тестирование производительности</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Среда:</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Production-like</Badge>
                          <Badge variant="outline" className="text-xs">Real data</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 dark:text-orange-400 font-bold text-xs">UAT</span>
                        </div>
                        Acceptance Testing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Формальное тестирование для определения готовности системы к развертыванию.
                      </p>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Типы:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• User Acceptance Testing (UAT)</li>
                          <li>• Business Acceptance Testing (BAT)</li>
                          <li>• Alpha Testing</li>
                          <li>• Beta Testing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Участники:</h4>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">End Users</Badge>
                          <Badge variant="outline" className="text-xs">Business Analysts</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Пирамида тестирования</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="inline-block">
                          <div className="w-32 h-8 bg-orange-200 dark:bg-orange-900 flex items-center justify-center text-sm font-medium mb-1">
                            UI Tests
                          </div>
                          <div className="w-48 h-8 bg-green-200 dark:bg-green-900 flex items-center justify-center text-sm font-medium mb-1">
                            Integration Tests
                          </div>
                          <div className="w-64 h-8 bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-sm font-medium">
                            Unit Tests
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <h4 className="font-medium mb-2">Unit Tests (70%)</h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            Быстрые, дешевые, много тестов для покрытия логики
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium mb-2">Integration Tests (20%)</h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            Тестирование взаимодействий между компонентами
                          </p>
                        </div>
                        <div className="text-center">
                          <h4 className="font-medium mb-2">UI Tests (10%)</h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            Медленные, дорогие, критические пользовательские сценарии
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Типы тестирования</CardTitle>
                <CardDescription>
                  Классификация тестирования по различным критериям
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="functional" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="functional">Функциональное</TabsTrigger>
                    <TabsTrigger value="non-functional">Нефункциональное</TabsTrigger>
                  </TabsList>

                  <TabsContent value="functional" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Smoke Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Базовое тестирование основной функциональности для проверки стабильности сборки.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Цель:</h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300">Убедиться, что основные функции работают</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">Когда:</h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300">После каждой новой сборки</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Sanity Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Узконаправленное тестирование конкретной функциональности после изменений.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Цель:</h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300">Проверить конкретные изменения</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">Когда:</h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300">После минорных изменений</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Regression Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Повторное тестирование для убеждения, что изменения не сломали существующую функциональность.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Типы:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Full Regression</li>
                                <li>• Partial Regression</li>
                                <li>• Unit Regression</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">User Acceptance Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование конечными пользователями для подтверждения соответствия бизнес-требованиям.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Участники:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Конечные пользователи</li>
                                <li>• Бизнес-аналитики</li>
                                <li>• Product Owner</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">API Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование интерфейсов прикладного программирования для проверки обмена данными.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Проверяется:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Корректность данных</li>
                                <li>• HTTP статус коды</li>
                                <li>• Время ответа</li>
                                <li>• Безопасность</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Database Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование операций с базой данных, целостности данных и производительности.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Аспекты:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• CRUD операции</li>
                                <li>• Целостность данных</li>
                                <li>• Триггеры и процедуры</li>
                                <li>• Производительность запросов</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="non-functional" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Performance Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование производительности системы под различными нагрузками.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Типы:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Load Testing</li>
                                <li>• Stress Testing</li>
                                <li>• Volume Testing</li>
                                <li>• Spike Testing</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Security Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование безопасности для выявления уязвимостей и защиты данных.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Проверяется:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Аутентификация</li>
                                <li>• Авторизация</li>
                                <li>• SQL Injection</li>
                                <li>• XSS атаки</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Usability Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование удобства использования и пользовательского опыта.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Критерии:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Простота использования</li>
                                <li>• Навигация</li>
                                <li>• Доступность</li>
                                <li>• Интуитивность</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Compatibility Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование совместимости с различными платформами и окружениями.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Типы:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Browser Compatibility</li>
                                <li>• OS Compatibility</li>
                                <li>• Device Compatibility</li>
                                <li>• Version Compatibility</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Accessibility Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование доступности для пользователей с ограниченными возможностями.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Стандарты:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• WCAG 2.1</li>
                                <li>• Section 508</li>
                                <li>• ADA Compliance</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Localization Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                            Тестирование адаптации продукта для различных регионов и языков.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium text-sm">Проверяется:</h4>
                              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                                <li>• Переводы текста</li>
                                <li>• Форматы дат/времени</li>
                                <li>• Валюты</li>
                                <li>• Культурные особенности</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Другие классификации</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-3">По знанию кода:</h4>
                        <div className="space-y-2">
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Black Box</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Тестирование без знания внутренней структуры</p>
                          </div>
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">White Box</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Тестирование с полным знанием кода</p>
                          </div>
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Gray Box</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Комбинация Black Box и White Box</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">По выполнению:</h4>
                        <div className="space-y-2">
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Manual Testing</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Выполняется человеком вручную</p>
                          </div>
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Automated Testing</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Выполняется с помощью инструментов</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">По подходу:</h4>
                        <div className="space-y-2">
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Positive Testing</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Проверка корректного поведения</p>
                          </div>
                          <div className="p-2 border rounded">
                            <h5 className="font-medium text-sm">Negative Testing</h5>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Проверка обработки ошибок</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </Link>
          <Link href="/test-design">
            <Button>
              Следующий раздел: Тест-дизайн
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
