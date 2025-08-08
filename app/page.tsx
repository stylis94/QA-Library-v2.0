'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Target, FileText, Bug, Database, Smartphone, MessageSquare, Search, Clock, TrendingUp, Zap, Award, Play, Code, Brain, Rocket, Settings } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"

const sections = [
{
  id: "basics",
  title: "Основы тестирования",
  description: "Фундаментальные знания о QA, SDLC, STLC и типах тестирования",
  icon: BookOpen,
  level: "Junior",
  progress: 85,
  topics: ["Что такое QA", "SDLC", "STLC", "Уровни тестирования", "Типы тестирования"],
  estimatedTime: "4-6 часов",
  hasQuiz: true,
  hasInteractive: true
},
{
  id: "test-design",
  title: "Тест-дизайн и техники",
  description: "Методы создания эффективных тестов и техники тест-дизайна",
  icon: Target,
  level: "Junior-Middle",
  progress: 60,
  topics: ["Эквивалентное разделение", "Граничные значения", "Таблицы решений", "Error Guessing"],
  estimatedTime: "6-8 часов",
  hasQuiz: true,
  hasInteractive: true
},
{
  id: "documentation",
  title: "Документация в тестировании",
  description: "Создание тест-планов, тест-кейсов и работа с инструментами",
  icon: FileText,
  level: "Junior-Middle",
  progress: 45,
  topics: ["Тест-планы", "Тест-кейсы", "Чек-листы", "TestRail", "Jira"],
  estimatedTime: "3-4 часа",
  hasQuiz: true,
  hasInteractive: true
},
{
  id: "bug-management",
  title: "Работа с багами",
  description: "Жизненный цикл багов, написание баг-репортов, приоритизация",
  icon: Bug,
  level: "Junior",
  progress: 70,
  topics: ["Жизненный цикл бага", "Баг-репорты", "Severity vs Priority", "Трекинг багов"],
  estimatedTime: "2-3 часа",
  hasQuiz: true,
  hasInteractive: true
},
{
  id: "sql-databases",
  title: "SQL и базы данных",
  description: "Основы SQL для тестировщиков и проверка данных в БД",
  icon: Database,
  level: "Middle",
  progress: 30,
  topics: ["SELECT запросы", "JOIN операции", "GROUP BY", "Проверка данных"],
  estimatedTime: "8-10 часов",
  hasQuiz: true,
  hasSandbox: true
},
{
  id: "api-testing",
  title: "API тестирование",
  description: "Тестирование REST API, работа с Postman, HTTP протокол",
  icon: MessageSquare,
  level: "Middle",
  progress: 25,
  topics: ["HTTP основы", "REST API", "Postman", "JSON/XML", "SOAP"],
  estimatedTime: "6-8 часов",
  hasQuiz: true,
  hasInteractive: true,
  hasSandbox: true
},
{
  id: "mobile-testing",
  title: "Мобильное тестирование",
  description: "Особенности тестирования мобильных приложений",
  icon: Smartphone,
  level: "Middle+",
  progress: 15,
  topics: ["iOS vs Android", "Эмуляторы", "Реальные устройства", "Специфика мобильных тестов"],
  estimatedTime: "4-6 часов",
  hasQuiz: true,
  hasInteractive: true
},
{
  id: "interview-prep",
  title: "Подготовка к собеседованию",
  description: "Вопросы, практические задачи и разбор реальных кейсов",
  icon: Users,
  level: "Все уровни",
  progress: 50,
  topics: ["Теоретические вопросы", "Практические задачи", "Реальные кейсы", "Soft skills"],
  estimatedTime: "Постоянно",
  hasQuiz: true,
  hasInteractive: true,
  hasSimulator: true
}
]

const hotTopics = [
{
  title: "Как тестировать API?",
  description: "Практический гайд по API тестированию",
  icon: MessageSquare,
  link: "/api-testing",
  badge: "Популярно"
},
{
  title: "Симулятор собеседования",
  description: "Тренируйтесь отвечать на вопросы",
  icon: Brain,
  link: "/interview-simulator",
  badge: "Новое"
},
{
  title: "SQL песочница",
  description: "Практикуйте SQL запросы онлайн",
  icon: Database,
  link: "/sql-sandbox",
  badge: "Интерактив"
},
{
  title: "Roadmap QA Engineer",
  description: "Путь развития от Junior до Senior",
  icon: Rocket,
  link: "/roadmap",
  badge: "Гайд"
}
]

const getLevelColor = (level: string) => {
if (level.includes("Junior")) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
if (level.includes("Middle")) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
if (level.includes("Senior")) return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
}

export default function HomePage() {
const [overallProgress, setOverallProgress] = useState(0)
const [selectedLevel, setSelectedLevel] = useState("Все уровни")

useEffect(() => {
  const totalProgress = sections.reduce((acc, section) => acc + section.progress, 0)
  setOverallProgress(Math.round(totalProgress / sections.length))
}, [])

const filteredSections = selectedLevel === "Все уровни" 
  ? sections 
  : sections.filter(section => section.level.includes(selectedLevel.replace("+", "")))

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    {/* Header */}
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                QA Library v2.0
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Современная платформа для QA Engineers
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Поиск
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Изучайте QA систематически
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          От Junior до Senior уровня. Интерактивные уроки, практические задания и реальные кейсы.
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300 mb-2">
            <span>Общий прогресс</span>
            <span>{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </div>

      {/* Hot Topics */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          🔥 Горячие темы
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotTopics.map((topic, index) => {
            const IconComponent = topic.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {topic.badge}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm mb-2">{topic.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Level Filter */}
      <div className="mb-8">
        <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="Все уровни">Все уровни</TabsTrigger>
            <TabsTrigger value="Junior">Junior</TabsTrigger>
            <TabsTrigger value="Middle">Middle</TabsTrigger>
            <TabsTrigger value="Middle+">Middle+</TabsTrigger>
            <TabsTrigger value="Senior">Senior</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredSections.map((section) => {
          const IconComponent = section.icon
          return (
            <Card key={section.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      {section.hasInteractive && (
                        <Zap className="w-4 h-4 text-yellow-500" title="Интерактивный контент" />
                      )}
                    </div>
                    <Badge className={getLevelColor(section.level)} variant="secondary">
                      {section.level}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                      <span>Прогресс</span>
                      <span>{section.progress}%</span>
                    </div>
                    <Progress value={section.progress} className="h-2" />
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {section.hasQuiz && (
                      <Badge variant="outline" className="text-xs">
                        <Brain className="w-3 h-3 mr-1" />
                        Квиз
                      </Badge>
                    )}
                    {section.hasSandbox && (
                      <Badge variant="outline" className="text-xs">
                        <Code className="w-3 h-3 mr-1" />
                        Песочница
                      </Badge>
                    )}
                    {section.hasSimulator && (
                      <Badge variant="outline" className="text-xs">
                        <Play className="w-3 h-3 mr-1" />
                        Симулятор
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-500 dark:text-slate-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {section.estimatedTime}
                    </div>
                  </div>
                  
                  <Link href={`/${section.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      {section.progress > 0 ? 'Продолжить' : 'Начать изучение'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-green-600" />
              Roadmap
            </CardTitle>
            <CardDescription>
              Пошаговый план развития карьеры
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/roadmap">
              <Button variant="outline" className="w-full">
                Посмотреть roadmap
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              Симулятор собеседования
            </CardTitle>
            <CardDescription>
              Тренируйтесь отвечать на вопросы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/interview-simulator">
              <Button variant="outline" className="w-full">
                Начать тренировку
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-600" />
              Песочницы
            </CardTitle>
            <CardDescription>
              Практикуйте навыки онлайн
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/sandbox">
              <Button variant="outline" className="w-full">
                Открыть песочницы
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Разделов</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">150+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Интерактивных уроков</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">25+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Песочниц</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">200+</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">Часов контента</div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t bg-white dark:bg-slate-900 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-slate-600 dark:text-slate-300">
          <p>© 2024 QA Library v2.0. Современная платформа для изучения тестирования ПО.</p>
        </div>
      </div>
    </footer>
  </div>
)
}
