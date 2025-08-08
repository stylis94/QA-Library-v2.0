'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowLeft, ArrowRight, Clock, Star, Target, Zap, BookOpen, Code, Database, Shield, TrendingUp } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

const roadmapData = {
  "junior-to-middle": {
    title: "Junior → Middle QA Engineer",
    description: "Путь развития от начинающего до среднего уровня",
    duration: "6-12 месяцев",
    skills: [
      {
        category: "Основы тестирования",
        icon: BookOpen,
        completed: true,
        skills: [
          { name: "SDLC/STLC", completed: true, importance: "Критично" },
          { name: "Типы и уровни тестирования", completed: true, importance: "Критично" },
          { name: "Техники тест-дизайна", completed: true, importance: "Критично" },
          { name: "Документация (тест-кейсы, баг-репорты)", completed: true, importance: "Критично" }
        ]
      },
      {
        category: "API тестирование",
        icon: Code,
        completed: false,
        skills: [
          { name: "HTTP протокол", completed: false, importance: "Критично" },
          { name: "REST API тестирование", completed: false, importance: "Критично" },
          { name: "Postman (продвинутый уровень)", completed: false, importance: "Критично" },
          { name: "JSON/XML валидация", completed: false, importance: "Важно" }
        ]
      },
      {
        category: "Базы данных",
        icon: Database,
        completed: false,
        skills: [
          { name: "SQL основы (SELECT, JOIN)", completed: false, importance: "Критично" },
          { name: "Проверка данных в БД", completed: false, importance: "Критично" },
          { name: "Работа с тестовыми данными", completed: false, importance: "Важно" },
          { name: "NoSQL основы", completed: false, importance: "Желательно" }
        ]
      },
      {
        category: "Автоматизация (начальный уровень)",
        icon: Zap,
        completed: false,
        skills: [
          { name: "Основы программирования (Python/Java)", completed: false, importance: "Важно" },
          { name: "Selenium WebDriver", completed: false, importance: "Важно" },
          { name: "Создание простых автотестов", completed: false, importance: "Важно" },
          { name: "Page Object Model", completed: false, importance: "Желательно" }
        ]
      }
    ]
  },
  "middle-to-senior": {
    title: "Middle → Senior QA Engineer",
    description: "Путь к экспертному уровню и лидерству",
    duration: "12-24 месяца",
    skills: [
      {
        category: "Продвинутая автоматизация",
        icon: Code,
        completed: false,
        skills: [
          { name: "Фреймворки автоматизации", completed: false, importance: "Критично" },
          { name: "CI/CD интеграция", completed: false, importance: "Критично" },
          { name: "Параллельное выполнение тестов", completed: false, importance: "Важно" },
          { name: "Кроссбраузерное тестирование", completed: false, importance: "Важно" }
        ]
      },
      {
        category: "Тестирование производительности",
        icon: TrendingUp,
        completed: false,
        skills: [
          { name: "JMeter/LoadRunner", completed: false, importance: "Критично" },
          { name: "Анализ метрик производительности", completed: false, importance: "Критично" },
          { name: "Профилирование приложений", completed: false, importance: "Важно" },
          { name: "Мониторинг в production", completed: false, importance: "Важно" }
        ]
      },
      {
        category: "Безопасность",
        icon: Shield,
        completed: false,
        skills: [
          { name: "OWASP Top 10", completed: false, importance: "Критично" },
          { name: "Security testing tools", completed: false, importance: "Важно" },
          { name: "Penetration testing основы", completed: false, importance: "Желательно" },
          { name: "Compliance testing", completed: false, importance: "Желательно" }
        ]
      },
      {
        category: "Лидерство и процессы",
        icon: Target,
        completed: false,
        skills: [
          { name: "Менторинг junior'ов", completed: false, importance: "Критично" },
          { name: "Планирование тестирования", completed: false, importance: "Критично" },
          { name: "Метрики качества", completed: false, importance: "Важно" },
          { name: "Процессы улучшения качества", completed: false, importance: "Важно" }
        ]
      }
    ]
  }
}

const getImportanceColor = (importance: string) => {
  switch (importance) {
    case "Критично": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "Важно": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "Желательно": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function RoadmapPage() {
  const [selectedPath, setSelectedPath] = useState("junior-to-middle")
  const currentRoadmap = roadmapData[selectedPath as keyof typeof roadmapData]

  const calculateProgress = (skills: any[]) => {
    const totalSkills = skills.reduce((acc, category) => acc + category.skills.length, 0)
    const completedSkills = skills.reduce((acc, category) => 
      acc + category.skills.filter((skill: any) => skill.completed).length, 0)
    return Math.round((completedSkills / totalSkills) * 100)
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
                QA Engineer Roadmap
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Пошаговый план развития карьеры в тестировании
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Path Selection */}
        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="junior-to-middle">Junior → Middle</TabsTrigger>
            <TabsTrigger value="middle-to-senior">Middle → Senior</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Roadmap Header */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{currentRoadmap.title}</CardTitle>
                <CardDescription className="text-lg">{currentRoadmap.description}</CardDescription>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentRoadmap.duration}</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {calculateProgress(currentRoadmap.skills)}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">завершено</div>
              </div>
            </div>
            <Progress value={calculateProgress(currentRoadmap.skills)} className="h-3 mt-4" />
          </CardHeader>
        </Card>

        {/* Skills Categories */}
        <div className="space-y-6">
          {currentRoadmap.skills.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const categoryProgress = Math.round(
              (category.skills.filter(skill => skill.completed).length / category.skills.length) * 100
            )

            return (
              <Card key={categoryIndex} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'}`}>
                        <IconComponent className={`w-6 h-6 ${category.completed ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.category}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={categoryProgress} className="h-2 w-32" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">
                            {categoryProgress}%
                          </span>
                        </div>
                      </div>
                    </div>
                    {category.completed && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          skill.completed 
                            ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' 
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {skill.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                            )}
                            <span className={`text-sm font-medium ${skill.completed ? 'text-green-700 dark:text-green-300' : ''}`}>
                              {skill.name}
                            </span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${getImportanceColor(skill.importance)}`}
                          >
                            {skill.importance}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Learning Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Рекомендуемые ресурсы для изучения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">📚 Книги</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                  <li>• "Тестирование Дот Ком" - Роман Савин</li>
                  <li>• "Agile Testing" - Lisa Crispin</li>
                  <li>• "The Art of Software Testing" - Myers</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🎥 Курсы</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                  <li>• Stepik - Автоматизация тестирования</li>
                  <li>• Coursera - Software Testing</li>
                  <li>• Udemy - API Testing</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🛠️ Практика</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
                  <li>• Наши песочницы</li>
                  <li>• GitHub проекты</li>
                  <li>• Тестовые приложения</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t mt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Button>
          </Link>
          <Link href="/interview-simulator">
            <Button>
              Симулятор собеседования
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
